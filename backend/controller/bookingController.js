const Booking = require('../models/bookingModel');


class bookingController {


    addBooking(req, res) {
        const userid = req.user;
        const packagesid = req.params.pid;

        //  const bdata = new packages({packages : packages, pdesc : pdesc, pprice : pprice, packagesid : req.file.path});
        const bdata = new Booking({ userid: userid, packagesid: packagesid });
        bdata.save()
            .then(function (result) {
                res.status(201).json({success:true, message: "Booking has been Added Sucessfully" })
                console.log(result);
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }

    deleteBooking(req, res) {
        const bid = req.params.bid;
        Booking.find({ _id: bid })
            .then(data => {
                if (data == "") {
                    res.status(400).json({ message: "User not found" })
                }
                else {
                    Booking.findByIdAndDelete(bid)
                        .then(function (result) {
                            res.status(200).json({ message: " Booking has been cancled sucessfully" })
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

    showAllBooking(req, res) {
        
        Booking.find().populate("packagesid").populate("userid")
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleBooking(req, res) {

        const id = req.params.id;
        Booking.findOne({ _id: id }).populate("packagesid").populate("userid")
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    showMyApplied(req, res) {
        const userid = req.user._id;
        // console.log(".........")
        var arr = []
        Booking
          .find({
            userid: userid,
          })

          .populate("packagesid")
          .then(function (data) {
              data.map(data=>{
                  arr.push({
                      _id: data._id,
                      packagesname: data.packagesid.packagesname,
                      packagedesc: data.packagesid.packagedesc,
                      packageduration: data.packagesid.packageduration,
                      packagetime: data.packagesid.packagetime,
                      packageprice: data.packagesid.packageprice,
                      pimage: data.packagesid.pimage,
                  })
              })
            res.status(200).json({ success: true, data: arr });
            
          })
          .catch(function (e) {
            res.status(500).json({ message: e });
          });
      }

}
module.exports = bookingController