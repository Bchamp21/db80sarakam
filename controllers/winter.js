var winter = require('../models/winter');
// List of all Winter
exports.winter_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Winter list');
};
// for a specific Winter.
exports.winter_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Winter detail: ' + req.params.id);
};
// Handle Winter create on POST.
exports.winter_create_post = async function (req, res) {
    console.log(req.body)
    let document = new winter();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gas_type":"regular", "quantity":13, "cost":43.56}
    document.wTemp = req.body.gas_type;
    document.wArea = req.body.quantity;
    document.wMonth = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Winter delete form on DELETE.
exports.winter_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Winter delete DELETE ' + req.params.id);
};
// Handle Winter update form on PUT.
exports.winter_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Gas update PUT' + req.params.id);
};

// List of all Winter
exports.winter_list = async function (req, res) {
    try {
        theWinter = await winter.find();
        res.send(theWinter);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.winter_view_all_Page = async function (req, res) {
    try {
        theWinter = await winter.find();
        res.render('winter', {
            title: 'Winter Search Results',
            results: theWinter
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};