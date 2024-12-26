const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');


app.use(cors());
app.options('*', cors())

//Middleware

app.use(bodyParser.json());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({ status: "success" })
// })



//Routes

const categoryRoutes = require('./routes/categories');

app.use("/uploads", express.static("uploads"));
app.use(`/api/category`, categoryRoutes);



//Database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(() => {
        console.log('Datebase Connection is ready...');

        //Server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })