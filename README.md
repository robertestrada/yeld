# Yeld
Yeld, a [Yelp.com](https://yelp.com/) clone, is a front-end single-page web application where users can search for real restaurants and other businesses.

Live Demo: [yeld.herokuapp.com](https://yeld.herokuapp.com/)
<br />
<br />

## Technologies
* Frontend: React / TypeScript / Material-UI / Yelp-API/ CSS / HTML / NPM / AWS S3
* Hosting: Heroku
<br />
<br />

## Features
* Search for businesses using location and other criteria
* Browse search results
* Geolocation assisted lcoation search
<br />
<br />

### Homepage
feature:
- Once a user arrives at the homepage, search fields are available for user interaction.   
<br />
<br />

### Searching for Business Information
features:
- For each product displayed in the feed, a REST Yelp API query is executed which produces all the relevant business data.
- The search terms entered require a location and optional term such as vague or specific identifiers like name, category, or even nothing at all to return meaningful results.
- Prior to submitting search terms, an autosuggestion in the form of a drop down list of possible search terms is generated as the user types to assist with faster searches and targeted recommendations.
- The user's geolation by IP address is fetched to assist with location searches nearby.
<br />
<br />

### Navbar
features:
- A Navbar appears at the top of the search results screen and business page screen, which allows similar search functionality as described in the above feature section.

### Search Results
features:
- Once a search is executed, the user is presented with a list of returned business search results that show the name, rating, price, address, picture, and other relevant information.
<br />
<br />