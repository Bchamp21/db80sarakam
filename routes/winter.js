var express = require('express');
const winter_controllers= require('../controllers/winter');
var router = express.Router();

/* GET winter */
router.get('/', winter_controllers.winter_view_all_Page );
/* GET detail winter page */
router.get('/detail', winter_controllers.winter_view_one_Page);
/* GET create winter page */
// router.get('/create', winter_controllers.winter_create_Page);
// /* GET update winter page */
// router.get('/update', winter_controllers.winter_update_Page);
// /* GET delete winter page */
// router.get('/delete', winter_controllers.winter_delete_Page);

module.exports = router;

