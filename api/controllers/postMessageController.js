const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { PostMessage } = require("../models/postMessage");

router.get("/", (req, res) => {
    PostMessage.find((err, records) => {
        if(!err) res.send(records)
        else console.error(err)
    });
});
router.get("/:id", (req, res) => {
    isObjectIdValid(req.params.id);

    PostMessage.findById(req.params.id, (err, record) => {
        if(!err) res.send(record)
        else console.log(err)
    });
});
router.post("/", (req, res) => {
    const newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    });

    newRecord.save((err, record) => {
        if(!err) res.send(record)
        else console.error(err)
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    isObjectIdValid(id);

    const updatedRecord = {
        title: req.body.title,
        message: req.body.message
    };

    PostMessage.findByIdAndUpdate(id, {$set: updatedRecord},{ new:true }, (err, record) =>{
        if(!err) {
            res.send(record)
        } else{
         console.error(err)
        }
    });
});

router.delete("/:id", (req, res) => {
    isObjectIdValid(req.params.id);
    PostMessage.findByIdAndDelete(req.params.id, (err, record) => {
        if(!err) res.send("deleted" + record)
        else console.error(err)
    });

});

function isObjectIdValid(id){
    if(!ObjectId.isValid(id)){
        return res.status(400).send("No record with given id: " + id);
    }
}

module.exports = router;

