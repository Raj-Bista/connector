const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');


//@route POST api/users
//@des Register user
//@access public

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email adress').isEmail(),
    check('password', 'Please enter 6 or more character').isLength({min: 6})
],(req, res)=> {
 const errors = validationResult(req);
 if(!errors.isEmpty()) {
     return res.status(400).json({errors: errors.array()})
 }
res.send('User route')});

module.exports = router;