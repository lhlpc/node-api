const mongoose = require('mongoose');

const Product = mongoose.model('products');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        const products = await Product.paginate({}, { page, limit: 7 });
        return response.json(products);
    },

    async show(request, response) {
        const product = await Product.findById(request.params.id);

        return response.json(product);1
    },
    async update (request, response){
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true})
        return response.json(product);
    },
    

    async destroy (request, response){
        await Product.findByIdAndRemove(request.params.id);

        return response.send();
    },

    async store(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    }
}