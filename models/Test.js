const mongoose = require('mongoose')

const TestSchema =  mongoose.Schema({
  name: String
})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test

