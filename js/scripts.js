$(document).ready(function() {
  
  //Get Weather Form
  $('button').click(function() {
	  
	  //Gets and Stores Entered Zipcode 
	  var zip = $('input').val();
	  console.log(zip);
	  
	  //Get the Weather
	  $.simpleWeather({
	
	  // Minimum properties to set
		zipcode: zip,
		unit: 'f',
		
	  // Method to display weather
		success: function(weather) {
			
			// Concatenate HTML code & weather variables.
			// Put into one big'ol collection
			
			html = '<h2>' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
			html += '<img src="img/' + weather.code + '.png "/>';
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li>';
			
			// Write collection to page with html() method
			// Note: difference between html() method vs. html option 
			$("#weather").html(html);
		},

		// Method 
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	  });

});	
   });
  
	
