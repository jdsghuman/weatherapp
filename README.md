# Weather App

Weather App that allows you to add and remove cities to a list and view the weather. 

Production URL:

## Built With
- React 
- Redux-Saga
- Node.js
- Express

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:

    ```
    OPEN_WEATHER_API_KEY=superDuperSecret
    ```

In a terminal window enter    
* `npm run server`
Open a new tab in terminal and enter
* `npm run client`
* Navigate to `localhost:3000`


### Completed Features

High level list of items completed.

- [ ] On the initial page load, it should load the weather for the current location
- [x] Should show the 7 day forecast for each city on the left, and show todays forecast in the top right. (**Due to the Yahoo Weather API service not being available, this requirement has changed**)
- [x] Should show a map of the city on the right
- [x] Should be able to add a city to the list
- [x] Should be able to remove a city from the list
- [x] Uses React (Next.js works to for SSR) 
- [x] Use StyledComponents library
- [x] Autocomplete and validate cities using the google places API
- [x] Supports WCAG compliance
- [ ] Uses LocalStorage to persist data between page reloads
- [x] Use a global store like redux for extra points
- [x] Any additional UI / UX improvements you feel necessary (Responsive design)