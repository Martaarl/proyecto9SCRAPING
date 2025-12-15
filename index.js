require("dotenv").config();
const gamesRouter = require("./src/api/routes/games");
const { connectDB } = require("./src/config/db");
//const { scrapper } = require("./src/utils/scrapper");

const express = require("express");

const app = express();
app.use(express.json());
connectDB();

app.use("/api/v1/games", gamesRouter);

app.listen(3000, () => {
    console.log("http://localhost:3000")
})

app.use((req, res, next) => {
    return res.status(404).json("Ruta no encontrada")
})

console.log("ejecuto el index.js");