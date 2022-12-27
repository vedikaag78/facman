require('dotenv').config()
const express = require("express")
const http = require("http")
const hostname = "localhost"
const port = 5001
const app = express()
const server = http.createServer(app)
const mydb = process.env.DB
var passport = require('passport');
var session = require('express-session');

const bodyParser = require("body-parser")
const adminRouter = require("./routes/admin")
const operatorRouter = require("./routes/operator")
const staffRouter = require("./routes/staff")
const router = require("./routes/user")

const mongoose = require("mongoose")
mongoose.connect(mydb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'200mb', extended: true })); 
app.use(bodyParser.json({ limit: "200mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}
  
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router)
app.use('/admin', adminRouter)
app.use('/operator', operatorRouter)
app.use('/staff', staffRouter)

server.listen(port,hostname, () =>{
    console.log(`server running at ${port}`)
})

