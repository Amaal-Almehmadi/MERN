const { Pet } = require('../models/pet.model');

module.exports = {
    createPet: (req, res) => {
        Pet.create(req.body)
            .then((pet) => {
                console.log("you have successfully created a thing");
                res.json(pet);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getAll: (req, res) => {
        Pet.find({})
            .then((pet) => res.json(pet))
            .catch((err) => res.status(400).json(err));
    },
    getOne : (req, res) => {
        Pet.findOne({ _id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err))       .catch((err) => res.status(400).json(err));
    },
    updatePet: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params._id}, req.body,{
            new: true,
            // upsert:true,
            runValidators: true,
        } )
            .then((pet) => res.json(pet))
            .catch((err) => res.status(400).json(err));
    },
    liksPet : (req, res) => {
        Pet.findOneAndUpdate(
            {_id: req.params._id},
            {$inc: {likes: 1}}
    
        )
            .then(() => res.json({msg: "massive win"}))
            .catch(err => res.json(err));
        },
        deletePet: (req, res) => {
            Pet.deleteOne({ _id: req.params._id })
                .then((pet) => res.json(pet))
                .catch((err) => res.status(400).json(err));
        },
}