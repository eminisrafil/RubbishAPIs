# Getting Started with Connecting your Esri App with Rubbish Data / API

## React Sample Application Setup 
Software / Node Modules / Packages Used in the Project
- Express.js (Server package for Javascript for the backend / server side)
- React.js (Frontend package for Javascript for the frontend / client side)
- Esri / ArcGIS Geolocating / Mapping Package so that we can map data on a map and visualize the data. 

Developer Notes: 
- Feel free to take elements of this application and utilize it to how you have your application setup. 
- This application is meant to give an example of how you can utilize Esri and connect to Rubbish's API to plot points on your Esri map and get data visualization for your map data needs. 

### Step 1: Setup the Server Side / Backend 
- First go into the server directory.
- run `npm install` in the terminal to install all the necessary node packages / modules
- In the server directory create a .env file to store your Rubbish Bearer Token and your TEAM_ID 
- Your .env file should look like this
- RUBBISH_BEARER_TOKEN=`insert your bearer token here`
- TEAM_ID=`insert your team id here`
- After you input the bearer token in the .env file and you've installed the node packages / modules, in the terminal run `node index.js` to start the server
- The server will then start on http://localhost:3109


### Step 2: Setup the Client Side / Frontend
- Go in to the my-app directory. 
- run `npm install` in the terminal to install all the necessary node packages / modules 
- Go to the App.js file and input your esri API Key under the esriConfig.apiKey to utilize the esri geolocating services.
- You should be able to get a free API Key if you register at https://developers.arcgis.com/
- run `npm start` in the terminal to run the app in development mode. 

### Step 3: How to use the Application
- Ensure you have both the server and the client side running from the previous steps and you have the API Key for Esri and the bearer token.
- Inside the App.js file, Tto plot the city your located in we will need the latitude and the longitude data of your cities center. Under the view variable there is a center parameter: Enter the longitude and latitude of your cities center inside of it to center the Esri Map to your city. You can find the coordinates to the center of your city by asking Google the coordinates of the center of your city. 
- Inside the App.js file there is a useEffect function.
- Inside the useEffect feel free to add as many API routes as needed to access data from Rubbish's Servers. 
- Right now the default route will get all of the current runs you've made and will plot the data on the Esri map
- Currently the attributes being added to the map are id, afterPhotoURL, photoURL, itemType, street, teamDisplayName, and userName. But you can add any attributes you would like on your map feel free to refer to the API documentation to figure out which parameters you would like to add. 
- You can find the attributes section under the pointGraphic Variable inside the App.js file. 
- Further API Documentation for other routes is provided inside the root directory. 
- Keep in mind that certain API's from Rubbish will require filter parameters. The API documentation will explain this. 

