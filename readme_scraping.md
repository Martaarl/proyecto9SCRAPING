# Proyecto 9: Web Scraping de Juegos con Puppeteer

Este proyecto consiste en un scraper que extrae información de juegos desde la página [Instant Gaming](https://www.instant-gaming.com/es/pc/steam/tendencias/) usando **Puppeteer**.  
El scraper recorre todas las páginas de la sección de tendencias, evita elementos que bloquean la interacción, y genera un archivo `games.json` con los datos de todos los productos.

**Datos recopilados de cada juego:**
- Título (`title`)
- Imagen (`img`)
- Precio (`price`)
- Stock disponible (`stock`)

---

## 🛠 Tecnologías utilizadas

- Node.js
- Puppeteer
- Express
- MongoDB / Mongoose
- Nodemon (para desarrollo)

---

## ⚙️ Instalación

1. Clonar el repositorio:
```bash
git clone <https://github.com/Martaarl/proyecto9SCRAPING.git>
```

2. Instalar dependencias:
```bash
npm install
```

---

## 🚀 Ejecutar el scraper y la API

### Ejecutar el scraper
```bash
npm run scrap
```
> Esto lanzará Puppeteer, abrirá el navegador, recorrerá todas las páginas de Instant Gaming y guardará los datos de cada juego.

### Ejecutar el servidor
```bash
npm run dev
# o
npm start
```
El servidor escuchará por defecto en `http://localhost:3000`.

### Rutas disponibles
- `POST /api/v1/games/scrap`  
  Inserta todos los juegos del `games.json` en la base de datos MongoDB.
- `GET /api/v1/games/`  
  Devuelve todos los juegos almacenados en la base de datos en formato JSON.

---

## 📂 Ejemplo de salida (`games.json`)
```json
[
  {
    "title": "Farming Simulator 25: Highlands Fishing - PC & Mac (Steam)",
    "img": "https://gaming-cdn.com/images/products/19724/380x218/farming-simulator-25-highlands-fishing-pc-mac-steam-cover.jpg?v=1752506845",
    "price": "18.89",
    "stock": true
  },
  {
    "title": "Digimon Story Time Stranger - PC (Steam)",
    "img": "https://gaming-cdn.com/images/products/18750/380x218/digimon-story-time-stranger-pc-steam-cover.jpg?v=1760015542",
    "price": "49.89",
    "stock": true
  },
  {
    "title": "Supermarket Simulator - PC (Steam)",
    "img": "https://gaming-cdn.com/images/products/16073/380x218/supermarket-simulator-pc-juego-steam-europe-us-canada-cover.jpg?v=1747743815",
    "price": "12.37",
    "stock": true
  }
]
```

---

## 📁 Estructura de archivos
```
proyecto9scraping/
│
├─ src/
│  ├─ api/
│  │  ├─ controllers/
│  │  │  └─ games.js
│  │  └─ routes/
│  │     └─ games.js
│  ├─ config/
│  │  └─ db.js
│  └─ utils/
│     ├─ scrapperLauncher.js
      └─ scrapper.js

│
├─ games.json
├─ index.js
├─ package.json
└─ README.md
```

---

## 👤 Autor
- Marta Ramírez Linares
- GitHub: https://github.com/Martaarl
