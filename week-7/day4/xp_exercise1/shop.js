const {products} = require('./products.js')

const productName = (name) => {
    for (product of products){
        if (name === product.name)
            return product
    }
}
console.log(productName('Blender'));

