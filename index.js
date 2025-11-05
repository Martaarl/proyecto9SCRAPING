const puppeteer = require("puppeteer");

const scrapper = async (url) => {

    const browser = await puppeteer.launch({headless: false, devtools: true});

    const page = await browser.newPage();

    await page.goto("https://www.instant-gaming.com/es/pc/steam/");

    await page.setViewport({width: 600, height: 1024});

    const arrayDivs = await page.$$(".force-badge")//selecciona los divs que tienen esa clase y de ahí saco todos los juegos
    
    for (const gameDiv of arrayDivs) {
        const className = await gameDiv.evaluate((el) => el.className);

    }


}

scrapper("https://www.instant-gaming.com/es/pc/steam/");