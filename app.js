const yargs = require('yargs');

const geocode =require('./geocode/geocode');
const weather =require('./weather/weather');

const argv = yargs
	.options({
		a:{
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
})
	.help()
	.alias('help','h')
	.argv;

geocode.geocodeAddress(argv.address,(errorMessage, results) =>{
	if(errorMessage){
		console.log(errorMessage);
	} else{
		console.log(results.address);

			weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResults) =>{
					if(errorMessage){
					console.log(errorMessage);
				} else{
		
						console.log(`\nCurrent temperature is ${weatherResults.temperature}F. \n\nIt feels like ${weatherResults.apparentTemperature}F. \n\nand It's ${weatherResults.summary} here`);
					}
				});




	}
	});

//fb38ca33e888fbbf3f5bd82d349fee3a




