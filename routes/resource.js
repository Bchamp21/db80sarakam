var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var winter_controller = require('../controllers/winter');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// winter ROUTES ///
// POST request for creating a gas.
router.post('/resource/winter', winter_controller.winter_create_post);
// DELETE request to delete gas.
router.delete('/resource/winter/:id', winter_controller.winter_delete);
// PUT request to update gas.
router.put('/resource/winter/:id', winter_controller.winter_update_put);
// GET request for one winter.
router.get('/resource/winter/:id', winter_controller.winter_detail);
// GET request for list of all winter items.
router.get('/resource/winter', winter_controller.winter_list);
module.exports = router;