var DASH_MAC_ADDRESS = "PLACE_AMAZON_DASH_HERE";
var LIFX_API_TOKEN = "PLACE_LIFX_API_TOKEN_HERE";

var dash_button = require('node-dash-button');
var dash = dash_button(DASH_MAC_ADDRESS);

var lifxObj = require('lifx-api');
var lifx = new lifxObj(LIFX_API_TOKEN);

dash.on("detected", function (){
	lifx.listLights('all', function(res) {
		var jsonRes = JSON.parse(res);
		var id = jsonRes[0].id; //using LIFX bulb ID

		lifx.togglePower(id, function(res) {
			console.log(res);
		});
	});
});
