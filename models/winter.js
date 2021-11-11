const mongoose = require("mongoose")
const winterSchema = mongoose.Schema({
    wTemp: Number,
    wArea: String,
    wMonth: String
})
module.exports = mongoose.model("Winter",
    winterSchema)