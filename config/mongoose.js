const mongoose = require('mongoose')

module.exports = (app) => {
    mongoose.connect('mongodb//localhost/cubicle', {useNewUrlParser: true, useUnifiedTopology: true})

    const db = mongoose.connection

    db.on('error', console.log.bind(console, 'connection error:'))
    db.once('open', ()=>{
        console.log('Connected to database!')
    })
}