angular.module('FreshPowReport').directive('showTime', function() {
  return {
    restrict: 'E',
    template: `
	 <div style="text-align: center;">
		 <span style="font-size: 20px; color: #fff;">{{time | date: 'fullDate'}}</span>
		 <br>
		 <span style="color: #fff;">{{time | date: 'HH:mm:ss'}} ~ {{fahrenheit}}°F in Provo, UT</span>
	 </div>
	 `,
	 controller: 'weatherCtrl',
    link: function(scope, element, attrs) {
      var currentTime = new Date();
      scope.time = currentTime;
    }
  };
});
