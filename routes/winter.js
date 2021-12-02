var express = require('express');
const winter_controllers= require('../controllers/winter');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET winter */
router.get('/', winter_controllers.winter_view_all_Page );
/* GET detail winter page */
router.get('/detail', winter_controllers.winter_view_one_Page);
/* GET create winter page */
router.get('/create',secured, winter_controllers.winter_create_Page);
// /* GET update winter page */
router.get('/update',secured, winter_controllers.winter_update_Page);
// /* GET delete winter page */
router.get('/delete',secured, winter_controllers.winter_delete_Page);

module.exports = router;

