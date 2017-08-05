const request = require('request');

var getWeather = (lat, lng, callback) => {



request({
	url:`https://api.darksky.net/forecast/fb38ca33e888fbbf3f5bd82d349fee3a/${lat},${lng}`,
	json: true
}, (error,response,body) =>{
	if(error){
	callback('Unable to connect to the forecast srever')
}else if (response.statusCode ===400){
callback('Unable to find that address.');
}else if(response.statusCode ===200){
		callback(undefined,{
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature,
			summary: body.currently.summary
	});
}
});

};

module.exports=   {
	getWeather
	}