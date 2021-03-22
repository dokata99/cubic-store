const Cube = require('../models/Cube')
const uniqid = require('uniqid')


function getAll(query) {


    let result = Cube.getAll()

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search))
    }
    if (query.from) {
        result = result.filter(x => Number(x.level) >= query.from)
    }

    if (query.to) {
        result = result.filter(x => Number(x.level) <= query.to)
    }
    return result
}

function getById(id) {
    return Cube.getById(id)
}
function create(data) {

    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    )

    return cube.save()

}

module.exports = {
    create,
    getAll,
    getById
}