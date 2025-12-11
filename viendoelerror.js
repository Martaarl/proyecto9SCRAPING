const fs = require("fs");

const data = [{ title: "Juego de prueba" }];

console.log("Ejecutando test.js...");

fs.writeFile("test.json", JSON.stringify(data), (err) => {
  if (err) {
    console.error("❌ Error:", err);
  } else {
    console.log("✅ ok, archivo escrito");
  }
});
