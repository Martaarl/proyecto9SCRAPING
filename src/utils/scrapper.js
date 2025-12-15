

const puppeteer = require("puppeteer");
const fs = require("fs");


const gamesArray = [];

const closeModals


const scrapper = async (url) => {

    const browser = await puppeteer.launch({headless: false, devtools: true});

    const page = await browser.newPage();

    await page.goto("https://www.instant-gaming.com/es/pc/steam/tendencias/");

    await page.setViewport({width: 600, height: 1024});

    repeat(page, browser);
};

const repeat = async (page, browser) => {

    const arrayDivs = await page.$$(".force-badge")

    for (const gameDiv of arrayDivs) {
        let price;
        let title = await gameDiv.$eval(".title", (el) => el.textContent);
        let img =  await gameDiv.$eval("img", (el) => el.src);
        //evaluate((el) => el.className); esta sería la forma de añadir solo el className detrás del await si no utilizamos el eval
        try {
            price = await gameDiv.$eval(".price", (el) => 
                parseFloat(el.textContent.slice(0, el.textContent.length -1)));
            
        } catch (error) {
           
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
        repeat(page, browser);

    } catch (error) {
        write(gamesArray);
        await browser.close();
    }
    }

const write = (gamesArray) => {
    fs.writeFile("games.json", JSON.stringify(gamesArray), () =>{
        console.log("Archivo escrito");
    });
};

module.exports={scrapper};

scrapper("https://www.instant-gaming.com/es/pc/steam/tendencias/");
