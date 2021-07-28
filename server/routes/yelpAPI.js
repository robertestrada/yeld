var express = require('express');
var router = express.Router();
const yelp = require('yelp-fusion');
const YELP_BEARER_TOKEN = process.env.YELP_API_KEY;
const client = yelp.client(YELP_BEARER_TOKEN);
const YELP_API_BASE_URL = 'https://api.yelp.com/v3';


router.get('/', async function(req, res) {
    if (req.query.text.length > 0) {
        try {
            const response = await client.autocomplete({ text: req.query.text });
            return await res.send(response.jsonBody);
        } catch (error) {
            console.log(error);
        }
    }
});

module.exports = router;