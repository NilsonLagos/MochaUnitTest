const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
// require('dotenv').config();
require('./connection')
const app = express()

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 
app.use(routes)

app.listen(process.env.port || 4000, ()=>{
    console.log('Server Ready')
})

module.exports = app