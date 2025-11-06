const puppeteer = require("puppeteer");
const fs = require("fs");


const gamesArray = [];


const scrapper = async (url) => {

    const browser = await puppeteer.launch({headless: false, devtools: true});

    const page = await browser.newPage();

    await page.goto("https://www.instant-gaming.com/es/pc/steam/");

    await page.setViewport({width: 600, height: 1024});

    const arrayDivs = await page.$$(".force-badge")//selecciona los divs que tienen esa clase y de ahí saco todos los juegos
    
   

    for (const gameDiv of arrayDivs) {
        let price;
        let title = await gameDiv.$eval(".title", (el) => el.textContent);
       // console.log(title)
        let img =  await gameDiv.$eval("img", (el) => el.src);
       // console.log(img);
    
        //evaluate((el) => el.className); esta sería la forma de añadir solo el className detrás del await si no utilizamos el eval
        try {
            price = await gameDiv.$eval(".price", (el) => 
                parseFloat(el.textContent.slice(0, el.textContent.length -1)));
            
        } catch (error) {
            price = "0";
        }
      //  console.log(price);

        const game = {
        title, 
        price,
        img
    }
     // console.log(game); 
      gamesArray.push(game);
    }
    write(gamesArray); 

    const arrow = await page.$eval("[title='Next']");
   
};

const write = (gamesArray) => {
    fs.writeFile("games.json", JSON.stringify(gamesArray), () =>{
        console.log("Archivo escrito");
    });
};

scrapper("https://www.instant-gaming.com/es/pc/steam/tendencias/");