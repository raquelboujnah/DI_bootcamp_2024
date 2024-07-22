const express = require("express");
const { products } = require("./config/data.js");
const bp = require("body-parser")
// console.log(products);

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use("/", express.static(__dirname + "/public"))

app.listen(5000, () => {
  console.log("run on 5000");
}); 

app.get("/api/products", (req, res) => {
  res.json(products);
});

/** params */
app.get("/api/products/:id", (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) return res.sendStatus(404);
  res.json(product);
});

/** query
 * name - query ip
 */
app.get("/api/search", (req, res) => {
  //   console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    return res.status(404).json({ msg: "no product match your search!" });
  }
  res.json(filtered);
});

/**
 * CRUD API
 * Create: POST - create a new product
 * Read: GET - get data params / query
 * Update: PUT - update product
 * Delete: DELETE - delete data
 */

// create post insert new product
app.post("/api/products", (req, res) => {
  console.log(req.body);
  const newProduct = {...req.body, id: products.length + 1}
  products.push(newProduct)
  res.send('ok from post')
})

// update put
app.put("/api/products/:id", (req, res) => {
  const {id} = req.params;
  const {name, price} = req.body;
  const index = products.findIndex((item) => item.id == id)
  products[index] = {
    ...products[index],
    name, 
    price
  };

  res.json(products)
  console.log(name, price);

})

// delete 
app.delete("/api/products/:id", (req, res) => {
  const {id} = req.params;
  const index = products.findIndex((item) => item.id == id)
  products.splice(index, 1)
  res.json(products)
})