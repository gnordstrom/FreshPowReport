angular.module('FreshPowReport').service('powService', function($http){

////// California Resorts
////// Colorado Resorts
  // Arapahoe Basin
  this.getAbasin = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Arapahoe Basin&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		console.log(response);
		return response.data.data.weather;
	 });
  };
  // Vail
  this.getVail = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Vail&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		console.log(response);
		return response.data.data.weather;
	 });
  };


////// Utah Resorts
  // Park City
  this.getPC = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Park City&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Snowbird
  this.getSnowbird = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Snowbird&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		console.log(response);
		return response.data.data.weather;
	 });
  };

  // Weather API for Home View
  this.getWeather = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=84601,us&appid=243eb7e5a018afa8c40a31dc7738469c'
    }).then(function(response){
      // console.log(response);
      return response.data;
    });
  };



});
