const mongoose = require('mongoose')
const config = require('./_config');

if(process.env.NODE_ENV==="test"){
    before((done)=>{
        mongoose.Promise = global.Promise
        mongoose.connect(config.mongoURI[process.env.NODE_ENV], { useNewUrlParser: true })
        mongoose.connection.on('open',() => {
            console.log("Database", config.mongoURI[process.env.NODE_ENV], "running")   
            done() 
        }).on('error',(error) => {
            console.log("Connection error:",error)
        })
    })
}else if(process.env.NODE_ENV==="dev"){
    mongoose.Promise = global.Promise
    mongoose.connect(config.mongoURI[process.env.NODE_ENV], { useNewUrlParser: true })
    mongoose.connection.on('open',() => {
        console.log("Database", config.mongoURI[process.env.NODE_ENV], "running")   
    }).on('error',(error) => {
        console.log("Connection error:",error)
    })
}
