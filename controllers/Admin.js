const AdminModel = require('../models/admin')
// Create and Save a new admin
exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const admin = new AdminModel({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone
    });

    await admin.save().then(data => {
        res.send({
            message:"Admin created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating admin"
        });
    });
};
// Retrieve all admins from the database.
exports.findAll = async (req, res) => {
    try {
        const admin = await AdminModel.find();
        res.status(200).json(admin);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
// Find a single Admin with an id
exports.findOne = async (req, res) => {
    try {
        const user = await AdminModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};
// Update an admin by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await AdminModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Admin not found.`
            });
        }else{
            res.send({ message: "Admin updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete an admin with the specified id in the request
exports.destroy = async (req, res) => {
    await AdminModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Admin not found.`
            });
        } else {
            res.send({
                message: "Admin deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};