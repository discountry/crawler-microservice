const express = require('express')
const puppeteer = require('puppeteer');
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.all('/site', function (req, res) {
    console.log(req.method)
    let url = ''
    if (req.method === 'GET') {
        url = req.query.url
    } else {
        url = req.body.url
    }

    let scrape = async () => {
        const browser = await puppeteer.launch({
            // change to your local Chromium location
            executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        });
        const page = await browser.newPage();
    
        await page.goto(url);

        let title = await page.title().then(title => title);

        let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    
        browser.close();
        return {
            url: page.url(),
            title: title,
            content: bodyHTML,
        };
    };
    
    scrape().then((value) => {
        //console.log(value);
        res.json(value)
    });


  })

app.listen(3000, () => console.log('Crawler app listening on port 3000!'))
