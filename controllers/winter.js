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
    // {"wTemp":65, "wArea":"Kansas City", "wMonth":"Oct"}
    document.wTemp = req.body.wTemp;
    document.wArea = req.body.wArea;
    document.wMonth = req.body.wMonth;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Winter delete on DELETE.
exports.winter_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await winter.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Winter update form on PUT.
exports.winter_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Winter update PUT' + req.params.id);
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
// Handle a show one view with id specified by query
exports.winter_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await winter.findById(req.query.id)
        res.render('winterdetail',
            { title: 'Winter Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// for a specific winter.
exports.winter_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await winter.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Winter update form on PUT.
exports.winter_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await winter.findById( req.params.id)
// Do updates of properties
if(req.body.wTemp) toUpdate.wTemp = req.body.wTemp;
if(req.body.wArea) toUpdate.wArea = req.body.wArea;
if(req.body.wMonth) toUpdate.wMonth = req.body.wMonth;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};