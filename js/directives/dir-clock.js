angular.module('FreshPowReport').directive('showTime', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/clock.html',
	 controller: 'weatherCtrl',
    link: function(scope, element, attrs) {
      var currentTime = new Date();
      scope.time = currentTime;
    }
  };
});
