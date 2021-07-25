# Yeld
Yeld, a [Yelp.com](https://yelp.com/) clone, is a front-end single-page web application where users can search for real restaurants and other businesses, browse real business reviews & ratings, and filter searches by criteria like category, price, rating, etc.

Live Demo: [yeld.herokuapp.com](https://yeld.herokuapp.com/)
<br />
<br />

## Technologies
* Frontend: React / TypeScript / Material-UI / Yelp-API/ CSS / HTML / NPM
* Hosting: Heroku
<br />
<br />

## Features
* Search for businesses using location and other criteria
* Browse search results sorted by recommended, highest rating, or most reviews
* Filter searches by price, rating, location, etc. for new results
* View detailed business information to make a more informed decision
* Browse user reviews for a business to determine value and choices
<br />
<br />

### Homepage
feature:
- Once a user arrives at the homepage, a search field, Hot & New businesses section, and category section are available for user interaction.   
<br />
<br />

### Searching for Business Information
features:
- For each product displayed in the feed, a REST Yelp API query is executed which produces all the relevant business data, from identifying data to associated ratings.
- The search terms entered require a location and optional term such as vague or specific identifiers like name, category, or even nothing at all to return meaningful results.
- Prior to submitting search terms, an autosuggestion in the form of a drop down list of possible search terms is generated as the user types to assist with faster searches and targeted recommendations.
<br />
<br />

### Navbar
features:
- A Navbar appears at the top of the search results screen and business page screen, which allows the same search functionality as described in the above feature section.

### Search Results
features:
- Once a search is executed, the user is presented with a list of returned business search results that show the name, rating, price, address, picture, a snippet of the most recent review, and other relevant information.
- Each result can be clicked on to redirect to the result's main page.
- The search results can be sorted by recommended (best match), rating, or review count.
<br />
<br />

### Filter Search Results
feature:
- Once on a search results page, filtering by price, category, features, and distance is available to the left of the search results for quickly searching again with extra criteria.
<br />
<br />

### Business Page
features:
- When a user arrives on a selected business page from the search results, the business name, claimed status, rating, reviews count, price, open status, and hours of operation are displayed at the top, just below the navbar.
- Behind the above data, 3 business photos are displayed as a background in a row
- Below the above data, the location & hours, yelp business link, phone number, and address are displayed
- 3 user reviews appear below the above data
<br />
<br />

## Installation
After downloading this repo, you must set up the front-end app.

*.env Setup:*
- In the top-level folder, you must set your YELP_API_KEY in a .env file in the top-level folder, which you can get from creating your own Yelp API account, and also join the developer beta for categories to work.

### **Front-end React App Setup**
- Install dependencies by running ```npm install```.  Then, you can start the app with ```npm start```.  The front-end address is ```http://localhost:3000```.

### **Heroku Deployment**
- First, create a new app in Heroku.
- It is assumed for these isntructions you used the app name ```yeld```, though you will have to choose a different untaken name in heroku.
- It is assumed your main branch in git is ```main```.
- Then, under Settings/Buildpacks, click "Add buildpack" and enter ```https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz```, and save changes.  This provides a buildpack for react apps.
- For the environment variables, set the YELP_API_KEY.
- Then, install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) in terminal if you do not already have it.  In terminal in the top most folder, run ```heroku login```, and then ```heroku git:remote -a yeld```, then run ```git push heroku main```
- The website should be live once finished pushing to heroku.