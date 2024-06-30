const express = require('express');
const FormData = require('../schema/form.schema');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = await FormData.create(req.body);
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error: " + error);
    }
});

router.get('/', async (req,res) => {
    try {
        const data = await FormData.findOne({_id: req.query.id})
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error: " + error);
    }
})

module.exports = router;
