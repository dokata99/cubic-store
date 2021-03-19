const Cube = require('../models/Cube')
const uniqid = require('uniqid')
const productsDate = require('../config/products.json')
const fs = require('fs')
const path = require('path')


function getAll(){
    return productsDate
}

function getById(id){
    return productsDate.find(x=> x.id == id)
}
function create(data){

    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    )
    
    productsDate.push(cube)
    fs.writeFile(path.join(__dirname ,'/../config/products.json'),JSON.stringify(productsDate), (err) =>{
        if(err){
            console.log(err)
            return
        }
    })

}

module.exports = {
    create,
    getAll,
    getById
}