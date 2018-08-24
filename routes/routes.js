const express = require('express');
const router = express.Router();
const createTest = require('../controllers/create_test')
const addSteps = require('../controllers/add_steps')

router.get('/',(req,res)=>{
    res.json({sucess: true})
})

router.post('/create_test/:id', createTest)

router.post('/add_steps/:id', addSteps)

module.exports = router