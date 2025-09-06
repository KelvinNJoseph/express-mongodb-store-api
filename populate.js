require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');
const jsonProducts = require('./products.json');

const url = process.env.MONGO_URI;

const start = async () =>{
    try {
        await connectDB(url)
        console.log('Success!!')
    } catch (error) {
        console.log(TypeError)
    }
}

start()