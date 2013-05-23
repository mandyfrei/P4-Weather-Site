$(document).ready(function() {
  
	// Get the Weather
	$.simpleWeather({
	
		// Minimum properties to set
		zipcode: '99004',
		unit: 'f',
		
		// Method to display weather
		success: function(weather) {
			
			// Concatenate HTML code & weather variables.
			// Put into one big'ol collection
			html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li>';
			html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
			
			// Write collection to page with html() method
			// Note: difference between html() method vs. html option 
			$("#weather").html(html);
		},

		// Method 
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}

	});
	// end getting Weather
  
});	
