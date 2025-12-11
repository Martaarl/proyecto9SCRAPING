const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {type: String, require: true},
    img: {type: String, require: true},
    price: {type: Number, require: false},
    stock: {type: Boolean, required: true, default: true}

},{
    timestamps: true,
    collection: "games",
})

const Game = mongoose.model("games", gameSchema, "games");
module.exports = Game;