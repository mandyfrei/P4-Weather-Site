$(document).ready(function() {
  
  $('.alert').hide();
  
  //Pressing Enter to Get Weather
  //$('input').keyup(function() {
	//  var value= $('input').val();
	  //$('p').text(value);
  //});
  
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
			
			html = '<h2 class="span6">' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
			html += '<img class="span5" src="img/' + weather.code + '.png "/>';
			html += '<p class="span6">'+weather.city+', '+weather.region+'</p>';
			html += '<p class="span6">' +weather.updated+'</p>';
			html += '<a class="span6" href="'+weather.link+'">Check out the rest of the week &raquo;</a>';
		
				
			
			// Write collection to page with html() method
			// Note: difference between html() method vs. html option 
			$("#weather").html(html);
		},
		
			// Method 
			error: function(error) {
				("#weather").text('hi');
			}
	
		});
		// end getting Weather
		
	});


  
});	





  
	
