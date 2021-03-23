const Accessory = require('../models/Accessory')

function getAll() {
    return Accessory.find({}).lean()

}

function getById(id) {
    //   return Accessory.findById(id).lean()
}

function create(data) {

    let accessory = new Accessory(data)

    return accessory.save()

}

module.exports = {
    create,
    getAll
}