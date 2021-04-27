const Cart = require('../models/cartModel');

class cartController {

    addCart(req, res) {
        const  quantity= req.body.quantity;
        const totalPrice= req.body.totalPrice;
        
            try {
                Cart.findOne({
                  userId: req.user._id,
                  productId: req.body.productId,
                }).then(function (cart) {
                  if (cart) {
                    var Quantity = cart.quantity + 1;
                
                    Cart.findOneAndUpdate(
                      { userId: req.user._id, productId: req.body.productId },
                      { $set: { quantity: cartQuantity } }
                    )
                      .then(function (upCart) {
                        return res.json({
                          success: true,
                          message: "Cart Updated",
                          cart: upCart,
                        });
                      })
                      .catch((error) => {
                        return res.json({
                          success: false,
                          message: error.message,
                        });
                      });
                  } else { 
                       const cdata = new Cart({ userId: req.user._id,productId: req.params.bid, totalPrice: totalPrice });
                  cdata.save()
                      .then(function (result) {
                          res.status(201).json({ success: true, result: result })
                      })
                      .catch(function (err) {
                          res.status(500).json({ message: err })
                      })
                   ;
                  }
                });
              } catch (error) {
                res.status(500).json({ success: false, error: error.message });
              }
            }
    


    

    updateCart(req, res) {
        const id = req.params.bid;
        Cart.updateOne({ _id: id }, {quantity:req.body.quantity })

            .then(function (result) {
                res.status(200).json({ message: "Cart  updated sucessfull" })
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })
    }

    deleteCart(req, res) {
        const bid = req.params.bid;
        Cart.find({ _id: bid })
            .then(data => {
                if (data == "") {
                    res.status(400).json({ message: "User not found" })
                }
                else {
                    Cart.findByIdAndDelete(bid)
                        .then(function (result) {
                            res.status(200).json({ message: " product has been cancled sucessfully" })
                        })
                        .catch(function (err) {
                            res.status(400).json({ message: err })
                        })
                }
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    showAllCart(req, res) {

        Cart.find().populate("productId").populate("userId")
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleCart(req, res) {

        const id = req.params.id;
        Cart.findOne({ _id: id }).populate("productId").populate("userId")
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }
    showMyApplied(req, res) {
        const userid = req.user;
        Cart.find({
            userid: userid,
        })

            .populate("productId")
            .then(function (data) {
                res.status(200).json(data);

            })

            .catch(function (e) {
                res.status(500).json({ message: e });
            });

    }


}
module.exports = cartController