// Message Endpoints

// Express
const express = require('express');
const router = express.Router();

//Modules
const response = require('../../network/response');
const controller = require('./controller');


// Routes
router.post('/', async (req,res)=>{

    const {user, message} = req.body;
    try{
        const result = await controller.addMessage(user, message);
        if(result){
            response.success(req,res,result, 201);
        }
    }catch(err){
        response.error(req,res,'El mensaje no se guardó', 400, err) 
    }
    
}); 

router.get('/', async (req,res)=>{
    try{
        const messages = await controller.getMessages();
        response.success(req,res, messages);
    }catch(err){
        response.error(req,res,'Fallo al traer todos los datos', 500, err) 
    }
});


module.exports = router;