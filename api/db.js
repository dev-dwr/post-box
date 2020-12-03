const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/mongo";

const mongo = mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useFindAndModify', false);

mongo.then(()=>{
    console.log("db connected");
}, err => {
    console.error(err)
});