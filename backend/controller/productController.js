const product = require('../models/productModel');

class ProductController {

    addProduct(req, res) {

        const products = req.body.product;
        const pdesc = req.body.pdesc;
        const buydate = req.body.buydate;
        const pprice = req.body.pprice;

        const pimage = req.files[0].filename;

        //  const pdata = new product({packages : packages, pdesc : pdesc, pprice : pprice, pimage : req.file.path});
        const pdata = new product({ product: products, pdesc: pdesc,buydate:buydate, pprice: pprice, pimage: pimage });
        pdata.save()
            .then(function (result) {
                res.status(201).json({ message: "Product has been Added Sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }


    deleteProduct(req, res) {
        const pid = req.params.pid;
        product.deleteOne({ _id: pid })
            .then(function (result) {
                res.status(200).json({ message: " Product has been Delected sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    updateProduct(req, res) {
        const products = req.body.product;
        const pdesc = req.body.pdesc;
        const pprice = req.body.pprice;
        const buydate = req.body.buydate;

        const id = req.params.id;
        console.log(req.body)
        product.updateOne({ _id: id }, { product: products, pdesc: pdesc, buydate:buydate,  pprice: pprice })

            .then(function (result) {
                res.status(200).json({ message: "product  updated sucessfull" })
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })

    }


    showAllProduct(req, res) {
        // console.log("Hello")
        product.find()
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleProduct(req, res) {
        const id = req.params.id;
        product.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }
}

module.exports = ProductController