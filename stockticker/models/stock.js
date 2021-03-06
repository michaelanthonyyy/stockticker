const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    name: { type: String, required: true },
    ticker: { type: String, required: true },
    description: String,
    image: String,
    link: String
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;