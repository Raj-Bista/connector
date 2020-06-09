const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');


//@route POST api/post
//@des Create post
//@access Private

router.get('/', (req, res)=>{
res.send('user route')});

module.exports = router;