const mongoose = require('mongoose');

const Product = mongoose.model('products');

module.exports = {
    async index(request, response) {
        const products = await Product.paginate({}, {page: 1, limit: 7 });
        const { page  = 1 }  = request.query;
        return response.json(products);
    },

    async show(request, response) {
        const product = await Product.findById();

        return response.json(product);1
    },
    async update (request, response){
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true})
        return response.json(product);
    },
    

    async destroy (request, response){
        await Product.findByIdAndRemove(request.params.id);

        return response.send();1
    },

    async store(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    }
}