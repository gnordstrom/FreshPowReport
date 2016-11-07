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

////// Sweden
// Kläppen Ski Resort
this.getKlappen = function() {
  return $http ({
	 method: 'GET',
	 url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=61.0324, 13.3405&format=json&date=today&num_of_days=3'
  }).then(function(response){
	 console.log(response);
	 return response.data.data.weather;
  });
};

////// Utah Resorts
  // Alta
  this.getAlta = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84092&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Brian Head
  this.getBrianHead = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84719&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Brighton
  this.getBrighton = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84121&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Deer Valley
  this.getDeerValley = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84060&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Eagle Point
  this.getEaglePoint = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84713&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Nordic Valley
  this.getNordicValley = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84310&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
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
  // Powder Mountain
  this.getPowderMountain = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Powder Mountain&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Snowbasin
  this.getSnowbasin = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84317&format=json&date=today&num_of_days=3'
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
  // Solitude
  this.getSolitude = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84121&format=json&date=today&num_of_days=3'
    }).then(function(response){
      console.log(response);
      return response.data.data.weather;
    });
  };
  // Sundance
  this.getSundance = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Sundance&format=json&date=today&num_of_days=3'
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
