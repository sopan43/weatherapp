# weatherapp

Its a command line weather forecast app, created using Node.js. It usage Google geocode API to fetch Latitude and Longitude of the location, then using these Latitude and Longitude it fetches the weather information of the location using Darksky forecast API.

Before running the app run there commands in the terminal in the project directory (Internet connection is required)
-	npm init
-	npm install axios –save
-	npm install yargs –save
-	npm install request –save

After running there commands, to run the application (Internet connection is required)

node app.js –a pincode

or

node app.js –address pincode

or

node app.js –a ‘city/address’

or

node app.js –address ‘city/address’

