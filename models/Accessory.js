const mongoose = require('mongoose')


const accessorySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,

    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type: String,
        required: true,
        validate: /^https?/
    },
    description:{
        type: String,
        required: true,
        maxlength:100
    }
})
module.exports = mongoose.model('Accessory', accessorySchema)