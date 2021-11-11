import winter, { find } from '../models/winter';
// List of all Winter
export function winter_list (req, res) {
    res.send('NOT IMPLEMENTED: Winter list');
}
// for a specific Winter.
export function winter_detail (req, res) {
    res.send('NOT IMPLEMENTED: Winter detail: ' + req.params.id);
}
// Handle Winter create on POST.
export async function winter_create_post (req, res) {
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
}
// Handle Winter delete form on DELETE.
export function winter_delete (req, res) {
    res.send('NOT IMPLEMENTED: Winter delete DELETE ' + req.params.id);
}
// Handle Winter update form on PUT.
export function winter_update_put (req, res) {
    res.send('NOT IMPLEMENTED: Winter update PUT' + req.params.id);
}

// List of all Winter
export async function winter_list (req, res) {
    try {
        theWinter = await winter.find();
        res.send(theWinter);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// VIEWS
// Handle a show all view
export async function winter_view_all_Page (req, res) {
    try {
        theWinter = await find();
        res.render('winter', {
            title: 'Winter Search Results',
            results: theWinter
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}