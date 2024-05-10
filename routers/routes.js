const express = require('express');
const { Model } = require('mongoose');
const router = express.Router()


// HTTP Methods (Verbs )
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;