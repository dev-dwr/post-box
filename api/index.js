
const cors = require("cors")
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const port = 4000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


const postRouter = require("./controllers/postMessageController");
app.use("/api/posts", postRouter);


const db = "mongodb://mongo:27017/post-box-mongo";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log("db connected");
    app.listen(port, () => console.log("Server running on port: " + port));
    
}, err => {
    console.error(err)
});


