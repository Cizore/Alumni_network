//jshint esversion:6

const express = require("express");
const mongoose=require("mongoose");
const connectToMongo=require("./db");
const bodyParser = require("body-parser")
const cors=require("cors")
const path = require('path');

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use('/uploads/profileImg',express.static("uploads/profileImg"));
app.use('/uploads/resume',express.static("uploads/resume"));


app.use('/auth',require("./routes/authRoutes"));
app.use('/api',require("./routes/apiRoutes"));
app.use('/upload',require("./routes/uploadRoutes"));

connectToMongo();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'superAdmin.html'));
});



app.listen(8080, function() {
  console.log("Server started on port 8080");
});

