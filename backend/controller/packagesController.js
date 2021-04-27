const packages = require('../models/packagesModel');

class PackagesController {

    addPackages(req, res) {
        const packagesname = req.body.packagesname;
        const packagedesc = req.body.packagedesc;
        const packagetime = req.body.packagetime;
        const packageduration = req.body.packageduration;
        const packageprice = req.body.packageprice;
        const pimage = req.files[0].filename;

        //  const pdata = new packages({packages : packages, pdesc : pdesc, pprice : pprice, pimage : req.file.path});
        const pdata = new packages({
            packagesname: packagesname, packagedesc: packagedesc,
            packagetime: packagetime, packageduration: packageduration, packageprice: packageprice,
            pimage: pimage
        });
        pdata.save()
            .then(function (result) {
                res.status(201).json({ message: "Packages has been Added Sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }


    deletePackages(req, res) {
        const pid = req.params.pid;
        packages.deleteOne({ _id: pid })
            .then(function (result) {
                res.status(200).json({ message: " Package has been Delected sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }




    updatePackages(req, res) {
        const packagesname = req.body.packagesname;
        const packagedesc = req.body.packagedesc;
        const packagetime = req.body.packagetime;
        const packageduration = req.body.packageduration;
        const packageprice = req.body.packageprice;

        const id = req.params.id;
        console.log(req.body)
        packages.updateOne({ _id: id }, { packagesname: packagesname, packagedesc: packagedesc, packagetime: packagetime, packageduration: packageduration, packageprice: packageprice })

            .then(function (result) {
                res.status(200).json({ message: "packages  updated sucessfull" })
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })

    }


    showAllPackages(req, res) {
        console.log("Hello")
        packages.find()
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSinglePackages(req, res) {

        const id = req.params.id;
        console.log(id)
        packages.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json({success:true, data:data});
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }
}

module.exports = PackagesController