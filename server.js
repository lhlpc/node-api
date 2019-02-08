const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect('my-mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir("./src/models");
const Product = mongoose.model('Product');

app.get('/', (request, response) => {
    Product.create({
        title: "bla 1",
        description:  "bla 2",
        url:  "bla 3",
    });
    response.send('Hello, yo!');
    console.log(request, response);
});


app.listen(3001);

