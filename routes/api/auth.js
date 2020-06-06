const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const User = require('../../models/User')

//@route GET api/auth
//@des Test route
//@dec Public

router.get('/', auth, async (req, res)=> {
try {
   const user = await (await User.findById(req.user.id)).isSelected('-password');
    res.json(user);
} catch (err) {
    console.log(err.message)
    res.status(500).send('server error')
}
});

module.exports = router;