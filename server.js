const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json()); // allow to send posts on JSON format
app.use(cors());

mongoose.connect('my-mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
require("./src/models/Product");

// const Product = mongoose.model('Product');
const Product = mongoose.model('Product');
app.use('/api', require('./src/routes'));



// app.get('/', (request, response) => {
//     Product.create({
//         title: "bla 1",
//         description:  "bla 2",
//         url:  "bla 3",
//     });
//     response.send('Hello, yo!');
//     console.log(request, response);
// });


app.listen(3001);

