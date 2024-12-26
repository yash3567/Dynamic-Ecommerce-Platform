const { Category } = require("../models/category");
// import { Options } from 'undici-types/connector';
const { ImageUpload } = require("../models/imageUpload");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const slugify = require("slugify");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_cloud_Name,
    api_key: process.env.cloudinary_Config_api_Key,
    api_secret: process.env.cloudinary_Config_api_Secret,
    secure: true,
});

var imagesArr = [];

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage: storage, });


router.post(`/upload`, upload.array("images"), async (req, res) => {
    imagesArr = [];
    try {
        for (let i = 0; i < req?.files?.length; i++) {
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: false,
            };
            const img = await cloudinary.uploader.upload(req.files[i].path, options,
                function (error, result) {
                    imagesArr.push(result.secure_url);
                    fs.unlinkSync(`uploads/${req.files[i].filename}`);

                }
            );

        }

        let imagesUploaded = new ImageUpload({
            images: imagesArr,
        });

        imagesUploaded = await imagesUploaded.save();

    } catch (error) {
        console.log(error)

    }

});

router.post('/create', async (req, res) => {
    let catObj = {}

    if (imagesArr.lenght > 0) {
        catObj = {
            name: req.body.name,
            images: imagesArr,
            color: req.body.color,
            slug: req.body.name,
        };

    } else {
        catObj = {
            name: req.body.name,
            slug: req.body.name,
            // parentId: req.body.parentId
        };
    }

    if (req.body.parentId) {
        catObj.parentId = req.body.parentId
    }
    let category = new Category(catObj);
    if (!category) {
        res.status(500).json({
            error: err,
            success: false,
        });
    }

    category = await category.save();
    imagesArr = [];


    res.status(201).json(category);

});

const createCategories = (categories, parentId = null) => {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter((cat) => cat.parentId == undefined);
    } else {
        category = categories.filter((cat) => cat.parentId == parentId);
    }

    for (let cat of category) {
        categoryList.oush({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            images: cat.images,
            color: cat.color,
            children: createCategories(categories, cat._id)
        });

    }
    return categoryList;
};

router.get('/', async (req, res) => {
    try {

        const categoryList = await Category.find();


        if (!categoryList) {
            res.status(500).json({ success: false });
        }
        if (categoryList) {
            const categoryData = createCategories(categoryList)

            return res.status(200).json({ categoryList: categoryData });
        }
    } catch (error) {
        console.log(error)
    }
});

router.get(`/get/count`, async (req, res) => {


    const categoryCount = await Category.countDocumenets({ parentId: undefined });


    if (!categoryCount) {
        res.status(500).json({ success: false });
    }
    else {
        res.send({
            categoryCount: categoryCount,
        });
    }
});

router.get(`/subCat/get/count`, async (req, res) => {


    const category = await Category.find();


    if (!category) {
        res.status(500).json({ success: false });
    }
    else {
        const subCatList = [];
        for (let cat of category) {
            if (cat.parentId !== undefined) {
                subCatList.push(cat);
            }
        }
        res.send({
            categoryCount: subCatList.length,
        });
    }
});

router.get("/:id", async (req, res) => {
    categoryEdited = req.params.id;

    const category = await Category.findById(req.params.id);


    if (!category) {
        res.status(500).json({ message: "The category with the given ID was not found. " });
    }

    return res.status(200).send(category);
});

router.delete("/deleteImage", async (req, res) => {


    const imgUrl = req.query.img;

    //console.log(imgUrl)

    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.lenght - 1];

    const imageName = image.split(".")[0];

    const response = await cloudinary.uploader.destroy(
        imageName,
        (error, result) => {
            // console.log(error, res)
        }
    );
    if (response) {
        res.status(200).send(response)
    }
});

router.delete("/:id", async (req, res) => {

    const category = await Category.findById(req.params.id);
    const images = category.images;

    for (img of images) {
        const imgUrl = img
        const urlArr = imgUrl.split("/");
        const image = urlArr[urlArr.lenght - 1];
        const imageName = image.split(".")[0];

        cloudinary.uploader.destroy(
            imageName,
            (error, result) => {
                // console.log(error, result)
            });
        // console.log(imageName)
    }

    const deletedCat = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCat) {
        res.status(404).json({
            message: "Category not found",
            success: false,
        });
    }

    res.status(200).json({
        success: true,
        message: "Category deleted!",
    });
});

router.put("/:id", async (req, res) => {

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            images: req.body.images,
            color: req.body.color,
        },
        { new: true }
    );
    if (!category) {
        res.status(500).json({
            message: "Category cannot be updated",
            success: false,
        });
    }
    imagesArr = [];

    res.send(category);
});

module.exports = router;












