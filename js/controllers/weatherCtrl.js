angular.module('FreshPowReport').controller('weatherCtrl', function($scope, powService){
	  powService.getWeather().then(function(data) {
	    $scope.kelvins = data.main.temp;
	    $scope.fahrenheit = Math.round($scope.kelvins * 1.8 - 459.67);
	  });
});
