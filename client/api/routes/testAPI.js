var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const yelp = require('yelp-fusion');
const YELP_BEARER_TOKEN = process.env.REACT_APP_YELP_API_KEY;
const client = yelp.client(YELP_BEARER_TOKEN);
const YELP_API_BASE_URL = 'https://api.yelp.com/v3';


router.get('/', async function(req, res) {
    console.log(req.query.text);
    const response = await client.autocomplete({ text: req.query.text });
    return res.send(response.jsonBody);
});

module.exports = router;