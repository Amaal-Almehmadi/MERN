const PetController = require('../controllers/pet.controller');

module.exports = (app)=>{
    app.post('/new', PetController.createPet);

    app.get('/', PetController.getAll);
    app.get('/pet/:_id', PetController.getOne);

    app.put('/pet/:_id', PetController.updatePet);
    app.delete('/del/:_id', PetController.deletePet);
    app.put('/pet/like/:_id', PetController.liksPet);
}
