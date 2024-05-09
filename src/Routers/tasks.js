const express = require('express')
const router = express.Router();

const {getAllTaks} = require('../controllers/tasks')

router.route('/').get((req,res)=>{
    res.send("all Items")

})

module.exports = router;