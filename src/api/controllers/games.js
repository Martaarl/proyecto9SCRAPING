const Game = require("../models/games");
const games= require("../../../games.json");

const insertManyGames = async (req, res, next) => {
    try {
        await Game.deleteMany({});
        await Game.insertMany(games);
        return res.status(201).json({message:"Todos los juegos se han subido a la BBDD"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Error interno del servidor"});
    }

}

const getAllGames = async (req, res, next) => {
    try {
        const games = await Game.find();
        return res.status(200).json(games);
    } catch (error) {
        return res.status(500).json({error:"Error interno del servidor"});
    }
}

module.exports = {insertManyGames, getAllGames};

