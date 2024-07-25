const {_getAllProducts, _getOneProduct, _insertProduct} = require('../models/products.model.js');

const getAllProducts = (req, res) => {
    _getAllProducts()
        .then(result => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"});
        })
}

const getOneProduct = (req, res) => {
    const {id} = req.params;
    _getOneProduct(id)
        .then((result) =>{
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"});
        })
}

const insertProduct = (req, res) => {
    const {name, price} = req.body
    _insertProduct(name, price)
        .then((result) =>{
            // res.json(result);
            getAllProducts(req, res)
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({message: "something went wrong"});
        })
}

module.exports = {
    getAllProducts,
    getOneProduct,
    insertProduct
}