
require("./db");

const express = require("express");
const bodyParser = require("body-parser");


const port = process.env.PORT || 4000;
const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const postRouter = require("./controllers/postMessageController");



app.listen(port, () => { 
    console.log("Server running on port: " + port)
});

app.use("/posts", postRouter);
