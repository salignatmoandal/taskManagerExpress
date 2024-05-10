const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');


// Define a Mongoose schema(blueprint) for 'Data' model 
const dataScheme = new mongoose.Schema({
    description: {
        required:true,
        type: String
    },
    time: {
        required:true,
        type:String
    }
})

// Create a Mongoose model base on the schema 
module.exports = mongoose.model('Data', dataScheme)


