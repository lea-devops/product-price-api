const express = require('express');
const app = express();
const port = 3000;

const PRODUCTS = {
  "1": 19.99,
  "2": 5.49,
  "3": 3.99
};

app.get('/price', (req, res) => {
  const id = req.query.product_id;
  if (!PRODUCTS[id]) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json({ product_id: id, price: PRODUCTS[id] });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
