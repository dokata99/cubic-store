const express = require('express')
const config = require('./config/config')
const routes = require('./routes')
const mongoose = require('./config/mongoose')
const app = express()

const expressConfig = require('./config/express')

expressConfig(app)

mongoose(app)


app.use(routes)


app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`))
