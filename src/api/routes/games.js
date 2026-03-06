const { insertManyGames, getAllGames } = require("../controllers/games");

const gamesRouter = require("express").Router();
gamesRouter.post("/import", insertManyGames);
gamesRouter.get("/", getAllGames);

module.exports = gamesRouter;