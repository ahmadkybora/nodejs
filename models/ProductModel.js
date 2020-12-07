const dbCon = require('../database/connection');

const Product = function(product) {
    this.product_name = product.product_name;
    this.price = product.price;
};

Product.create = (req, res) => {
    dbCon.query("INSERT INTO products SET ?", (err, res) => {

    })
}