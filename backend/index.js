require('dotenv').config()
const express = require("express")
const http = require("http")
const hostname = "localhost"
const port = 5000
const app = express()
const server = http.createServer(app)
const mydb = process.env.DB

const mongoose = require("mongoose")
mongoose.connect(mydb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


server.listen(port,hostname, () =>{
    console.log(`server running at ${port}`)
})