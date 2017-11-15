# crawler-microservice

## Install

```bash
git clone https://github.com/discountry/crawler-microservice.git
cd crawler-microservice
npm install
npm start
```

## Usage

**GET**

/site?url=https://www.google.com

**POST**

params: `url : https://www.google.com`

/site

### Emulate real browser to crawl rendered content

**Set Chromium location in `browser.js`**

```js
...
const browser = await puppeteer.launch({
    // change to your local Chromium location
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
});
...
```

Then run this command.

```bash
npm run browser
```

## Requirements

node > 8.0
