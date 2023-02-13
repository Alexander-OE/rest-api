const express = require('express');
const Models = require('../models/model')
const router = express.Router()


// post method
router.post('/post', (req, res)=>{
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    // res.send("POST API");

})

// get all method
router.get('/getAll', (req, res) =>{
res.send("Get All API")
})

// get by ID method
router.get('/getAll/:id', (req, res) =>{
res.send("Get by ID API")
})

// Update by ID Method
router.patch('/update/:id', (req, res)=>{
res.send('Update by ID API')
})

// Delete by ID
router.delete('/delete/:id', () =>{
    res.send('Delete by ID API')
})


router.get('/getOne/:id', (req, res) =>{
res.send(req.params.id)
})


module.exports = router