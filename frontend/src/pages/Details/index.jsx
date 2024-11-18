import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import { useRef, useState } from "react";
// import Image1 from '../../assets/images/thumbnail-1.jpg'
// import Image2 from '../../assets/images/thumbnail-2.jpg'
// import Image3 from '../../assets/images/thumbnail-3.jpg'
// import Image4 from '../../assets/images/thumbnail-4.jpg'
// import Image5 from '../../assets/images/thumbnail-5.jpg'
// import Image6 from '../../assets/images/thumbnail-6.jpg'




const DetailsPage = () => {

    const [zoomImage, setZommImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg')

    const [bigImageSize, setBigImageSize] = useState([1500, 1500])
    const [smlImageSize, setSmlImageSize] = useState([150, 150])


    const zoomSlider = useRef()


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        // autoplay: 2000
    };

    const goto = (url) => {
        setZommImage(url)


    }


    return (

        <section className="detailsPage">
            <div className="breadcrumbWrapper mb-4">

                <div className="container-fluid" style={{ padding: "0px 42px", marginTop: '-25px' }}>
                    <ul className="breadcrumb breadcrumb2" style={{ marginBottom: 0 }}>
                        <li><Link><HomeOutlinedIcon style={{ marginRight: '2px', marginTop: '-5px' }} />Home</Link></li>
                        <li><Link>Vegetables & tubers </Link></li>
                        <li>Seeds of Change Organic</li>

                    </ul>
                </div>

            </div>
            <div className="container-fluid detailsContainer" style={{ padding: "0px 42px" }}>
                <div className="row pt-3 pb-3">
                    <div className="col-md-9 leftPart">
                        <div className="row">









                            {/* productzoom  code start here  */}

                            <div className="col-md-5 ">
                                <div className="productZoom">
                                    <InnerImageZoom zoomType='hover' zoomScale={1}
                                        src={`${zoomImage}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`} />
                                </div>



                                <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                                    <div className="item">
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="hey yash image not found" className="w-100"
                                            onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg')} />
                                    </div>
                                    <div className="item">
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="hey yash image not found" className="w-100"
                                            onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg')} />
                                    </div>
                                    <div className="item">
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="hey yash image not found" className="w-100"
                                            onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg')} />
                                    </div>
                                    <div className="item">
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="hey yash image not found" className="w-100"
                                            onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg')} />
                                    </div>
                                    <div className="item">
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="hey yash image not found" className="w-100"
                                            onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg')} />
                                    </div>
                                    <div className="item">
                                        <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="hey yash image not found" className="w-100"
                                            onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg')} />
                                    </div>
                                </Slider>
                            </div>
                            {/* productzoom code  end here */}



                            {/* product information here  */}
                            <div className="col-md-7 productInfo">
                                <h1>Seeds of Change <br /> Organic Quinoa,<br /> Brown</h1>
                                <div className="d-flex align-items-center mb-4" style={{ marginTop: 3 }}>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    <span className="text-Light" style={{ marginLeft: '5px' }}>(32 reviews)</span>
                                </div>


                                <div className="priceSec d-flex align-items-center mb-3">
                                    <span className="text-g priceLarge">$38</span>
                                    <div className="d-flex flex-column" style={{ marginLeft: 3 }}>
                                        <span className="text-org off">26% Off</span>
                                        <span className="text-Light oldPrice">$52</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Aliquam rem officia, corrupti reiciendis minima nisi modi,<br /> quasi, odio minus dolore impedit fuga eum eligendi.</p>
                            </div>
                            {/* productinfo end here  */}

                        </div>
                    </div>


                    <div className="col-md-3 rightPart">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsPage

