const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    id: mongoose.Types.ObjectId,

    username: {
        requiered: true,
        type: String,
    },
    password: {
        requiered: true,
        type: String,
    }
})

module.exports = mongoose.model('User', userSchema)