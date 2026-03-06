

const puppeteer = require("puppeteer");
const fs = require("fs");

const gamesArray = [];

const blockModals = async (page) => {
    try {
        await page.waitForSelector(".cookies-banner button", {timeout: 3000});
        await page.click(".cookies-banner button")
    } catch (error) {
        console.log("No se encontró el modal de cookies")
    }
}

const scrapper = async (url) => {

    //https://www.instant-gaming.com/es/pc/steam/tendencias/
    const browser = await puppeteer.launch({headless: false, devtools: true});
    const page = await browser.newPage();

    await page.goto(url);
    await page.setViewport({width: 600, height: 1024});

    await blockModals(page);
    
    try {
        await repeat(page, browser);
    } catch (error) {
        console.error("Error en el scrapper:", error)
    } finally {
        await browser.close();
    }
   
};

const repeat = async (page, browser) => {

    await page.waitForSelector(".force-badge");

    const arrayDivs = await page.$$(".force-badge")

    for (const gameDiv of arrayDivs) {
        let price;
        let title = await gameDiv.$eval(".title", (el) => el.textContent);
        let img =  await gameDiv.$eval("img", (el) => el.src);
        
        try {
            price = await gameDiv.$eval(".price", (el) => 
                parseFloat(el.textContent.slice(0, el.textContent.length -1)));
            
        } catch (error) {
           console.log("No se encontró el precio para el juego");
        }

        const game = {
        title, 
        img, 
        price,
        stock: price ? true : false,
    }
   
      gamesArray.push(game);
    }

    try {
        await page.$eval("[title='Next']", (el) => el.click());
        await page.waitForNavigation();
        await repeat(page, browser);

    } catch (error) {
        console.log("No se pudo avanzar a la siguiente página", error.message)
        write(gamesArray);
    }
    }

const write = (gamesArray) => {
    fs.writeFile("games.json", JSON.stringify(gamesArray), (err) =>{
       if (err) {
        console.error("Error escribiendo el archivo", err)
       } else {
         console.log("Archivo escrito correctamente");
       }
    });
};

module.exports={scrapper};

scrapper("https://www.instant-gaming.com/es/pc/steam/tendencias/");
