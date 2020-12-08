const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { check, validationResult } = require("express-validator");

const { PostMessage } = require("../models/postMessage");

router.get("/", (req, res) => {
    PostMessage.find((err, records) => {
        if (!err) res.send(records)
        else console.error(err)
    });
});
router.get("/:id", (req, res) => {
    isObjectIdValid(req.params.id);

    PostMessage.findById(req.params.id, (err, record) => {
        if (!err) res.send(record)
        else console.log(err)
    });
});
router.post("/", [
    check("title")
        .isLength({ min: 4 })
        .withMessage('Title must be greater than 4'),
    check("message")
        .isLength({ min: 6 })
        .withMessage('Message must be greater than 6')
], (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
    }

    const newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    }).save((err, record) => {
        if (!err) res.send(record)
        else console.error(err)
    });

});

router.put("/edit/:id", [
    check("title")
        .isLength({ min: 4 })
        .withMessage('Title must be greater than 4'),
    check("message")
        .isLength({ min: 6 })
        .withMessage('Message must be greater than 6')
], (req, res) => {
    const id = req.params.id;
    isObjectIdValid(id);

    const updatedRecord = {
        title: req.body.title,
        message: req.body.message
    };

    PostMessage.findByIdAndUpdate(id, { $set: updatedRecord }, { new: true }, (err, record) => {
        if (!err) {
            res.send(record)
        } else {
            console.error(err)
        }
    });
});

router.delete("/:id", (req, res) => {
    isObjectIdValid(req.params.id);
    PostMessage.findByIdAndDelete(req.params.id, (err, record) => {
        if (!err) res.send("deleted" + record)
        else console.error(err)
    });

});

function isObjectIdValid(id) {
    if (!ObjectId.isValid(id)) {
        return res.status(400).send("No record with given id: " + id);
    }
}

module.exports = router;

