const user = require('../models/user')

class UserController {


    update(req, res) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const phoneno = req.body.phoneno;
        const address = req.body.address;

        const id = req.params.id;
        user.updateOne({ _id: id }, {
            firstname: firstname, lastname: lastname, email: email, phoneno: phoneno,
            address: address
        })

            .then(function (data) {
                res.status(200).json({ success: true,data: data})
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })

    }


    deleteUser(req, res) {
        const uid = req.params.uid;
        user.deleteOne({ _id: uid })
            .then(function (result) {
                res.status(200).json({ message: " User has been Delected sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    showAllUser(req, res) {
        user.find()
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleUser(req, res) {
       
        const uid = req.params.uid;
        user.findOne({ _id: uid })
            .then(function (data) {
                res.status(200).json(data);
                console.log(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

     showProfile(req, res) {
   
        const id = req.user;
        user.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json({success: true, data:data});
                console.log(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }
}




module.exports = UserController