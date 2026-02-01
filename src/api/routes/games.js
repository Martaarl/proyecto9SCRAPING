const { insertManyGames, getAllGames } = require("../controllers/games");

const gamesRouter = require("express").Router();
gamesRouter.post("/scrap", insertManyGames);
gamesRouter.get("/", getAllGames);

module.exports = gamesRouter;