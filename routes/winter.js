var express = require('express');
const winter_controllers= require('../controllers/winter');
var router = express.Router();

/* GET winter */
router.get('/', winter_controlers.winter_view_all_Page );
/* GET detail winter page */
router.get('/detail', winter_controlers.winter_view_one_Page);
/* GET create winter page */
router.get('/create', winter_controlers.winter_create_Page);
/* GET update winter page */
router.get('/update', winter_controlers.winter_update_Page);
/* GET delete winter page */
router.get('/delete', winter_controlers.winter_delete_Page);

module.exports = router;

