angular.module('FreshPowReport').service('powService', function($http){

////// California Resorts
	// Alpine Meadows
	this.getAlpineMeadows = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=39.164, 120.239&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Bear Valley
	this.getBearValley = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=95223&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Dodge Ridge
	this.getDodgeRidge = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Dodge Ridge&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Heavenly
	this.getHeavenly = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Heavenly&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Homewood Mountain
	this.getHomewood = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=96141&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Kirkwood
	this.getKirkwood = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=95646&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Mammoth Mountain
	this.getMammoth = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=93546&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Mountain High
	this.getMountainHigh = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=92397&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Mt. Baldy
	this.getMtBaldy = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=91759&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Northstar
	this.getNorthstar = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=96161&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Sierra-at-Tahoe
	this.getSierraAtTahoe = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=95735&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Squaw Valley
	this.getSquawValley = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=96146&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };
	// Sugar Bowl
	this.getSugarBowl = function() {
 	 return $http ({
 		method: 'GET',
 		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=95724&format=json&date=today&num_of_days=3'
 	 }).then(function(response){
 	// 	console.log(response);
 		return response.data.data.weather;
 	 });
   };

////// Colorado Resorts
  // Arapahoe Basin
  this.getAbasin = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Arapahoe Basin&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Aspen
  this.getAspen = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=81611&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Beaver Creek
  this.getBeaverCreek = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=81620&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Breckenridge
  this.getBreckenridge = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Breckenridge&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Buttermilk
  this.getButtermilk = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=81611&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Copper Mountain
  this.getCopper = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=80443&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Eldora
  this.getEldora = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=80466&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Keystone
  this.getKeystone = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=80435&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Loveland
  this.getLoveland = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Loveland&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Monarch
  this.getMonarch = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=81227&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Powderhorn
  this.getPowderhorn = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=powderhorn&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Purgatory
  this.getPurgatory = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=81301&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Steamboat Springs
  this.getSteamboat = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Steamboat Springs&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Telluride
  this.getTelluride = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=81435&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Vail
  this.getVail = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Vail&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Winter Park
  this.getWinterPark = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=80482&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };

////// Sweden
// Kläppen Ski Resort
this.getKlappen = function() {
  return $http ({
	 method: 'GET',
	 url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=61.0324,13.3405&format=json&date=today&num_of_days=3'
  }).then(function(response){
	//  console.log(response);
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
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Brian Head
  this.getBrianHead = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84719&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Brighton
  this.getBrighton = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84121&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Deer Valley
  this.getDeerValley = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84060&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Eagle Point
  this.getEaglePoint = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84713&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Nordic Valley
  this.getNordicValley = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84310&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Park City
  this.getPC = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Park City&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Powder Mountain
  this.getPowderMountain = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Powder Mountain&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Snowbasin
  this.getSnowbasin = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84317&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Snowbird
  this.getSnowbird = function() {
	 return $http ({
		method: 'GET',
		url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Snowbird&format=json&date=today&num_of_days=3'
	 }).then(function(response){
		// console.log(response);
		return response.data.data.weather;
	 });
  };
  // Solitude
  this.getSolitude = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=84121&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
      return response.data.data.weather;
    });
  };
  // Sundance
  this.getSundance = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.worldweatheronline.com/premium/v1/ski.ashx?key=183e67661c2b4eec9b4223351160411&q=Sundance&format=json&date=today&num_of_days=3'
    }).then(function(response){
      // console.log(response);
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
