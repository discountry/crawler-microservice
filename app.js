const rp = require('request-promise')
const express = require('express')
const app = express()

app.all('/site', function (req, res) {
    console.log(req.method)
    var url = ''
    if (req.method === 'GET') {
        url = req.query.url
    } else {
        url = req.body.url
    }
    var options = {
        uri: url,
        resolveWithFullResponse: true,
    };
    rp(options)
    .then(function (response) {
        res.json(response)
    })
    .catch(function (err) {
        // Crawling failed...
        console.log(err)
    });
  })

app.listen(3000, () => console.log('Example app listening on port 3000!'))

