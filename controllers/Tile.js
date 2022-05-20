const TileModel = require('../models/tile')
// Create and Save a new tile
exports.create = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
//новая плитка
    const tile = new TileModel({
        author: req.body.author,
        name: req.body.name,
        content: req.body.content,
        user: req.body.user
    });

    await tile.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};
// Retrieve all tiles from the database.
exports.findAll = async (req, res) => {
    try {
        const tile = await TileModel.find();
        res.status(200).json(tile);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
// Find a single Tile with an id
exports.findOne = async (req, res) => {
    try {
        const tile = await TileModel.findById(req.params.id);
        res.status(200).json(tile);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};
// Update a tile by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await TileModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Tile not found.`
            });
        }else{
            res.send({ message: "Tile updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a tile with the specified id in the request
exports.destroy = async (req, res) => {
    await TileModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Tile not found.`
            });
        } else {
            res.send({
                message: "Tile deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};