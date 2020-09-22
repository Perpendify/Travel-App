# Travel-App
Udacity Capstone project – To build a travel app 


<br>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [How to use](#how-to-use)
* [How to test](#how-to-test)


<!-- ABOUT THE PROJECT -->
## About The Project

The objective of this project was to build a travel app from scratch, that utilizes external APIs to get information that will help a user plan their trip better. The key functionalities are:

• User can search for a location (I used Google's Places API) <br>
• User can input their date of arrival <br>
• User can obtain weather information (WeatherBit API) <br>
• User can see photos of the location <br>


A preview of the webapp is as follows:

<br>

Mobile:<br>
<img src="demonstrationMobile.gif"  style="width:150px;"/>

Desktop:<br>
<img src="demonstrationDesktop.gif"  style="width:550px;"/>

<br>




### Built With

* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Javascript](https://www.w3schools.com/js/)
* [Bootstrap](https://getbootstrap.com/)
* [Webpack](https://webpack.js.org/)
* [Node.js and NPM](https://nodejs.org/)
* [Babel](https://babeljs.io/)
* [Express.js](https://expressjs.com/)
* [Sass](https://sass-lang.com/)
* [Jest](https://jestjs.io/)
* [Places API](https://developers.google.com/places/web-service/overview)
* [WeatherBit API](https://www.weatherbit.io/api)
* [PixaBay API](https://pixabay.com/api/docs/)




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

Sign up for api keys and place them in .env file

weatherbit_api = ${YOUR API KEY}

API_pixabay = ${YOUR API KEY}


### Installation

1. Clone the repo
```sh
git clone https://github.com/Perpendify/Travel-App.git
```
2. Install NPM packages
```sh
npm install
```

### How to use

1. Start Server
```sh
npm run start 
```

2. Run program on dev
```sh
npm run build-dev
```

3. Run program on prod (Change file served in index.js to dist)
```sh
npm run build-prod
```

### How to test

1. Uncomment start.js


2. Comment away in index.js
'app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
 })' 


3. Run test
```sh
npm run test
```


<!-- CONTACT -->
## Contact

Ben Erwin - [@linkedin](https://www.linkedin.com/in/benjamin-erwin/) - Winwongyongzhi@gmail.com

Project Link: [https://github.com/Perpendify/Travel-App](https://github.com/Perpendify/Travel-App)


