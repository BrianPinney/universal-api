require("dotenv").config()
const mongoose = require('mongoose')
const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

const mongoUri = process.env.DATABASE_CONNECTION
console.log('fooo',process.env)
mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
mongoose.connection.on('connected', () => {
    console.log('Connected To DB')
})
const myRoutes = require("./routes/myRoutes")
app.use("/api/", myRoutes)

const port = 3001
app.listen(port,() => {
    console.log(`Server is running on port: ${port}`)
})
module.exports = app