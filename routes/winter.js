var express = require('express');
const winter_controllers= require('../controllers/winter');
var router = express.Router();
/* GET costumes */
router.get('/', winter_controllers.winter_view_all_Page );
module.exports = router;
