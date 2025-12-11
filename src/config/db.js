const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado con éxito a la base de datos");
    } catch (error) {
        console.log("Error conectándose a la base de datos")
    }
}

module.exports = {connectDB};