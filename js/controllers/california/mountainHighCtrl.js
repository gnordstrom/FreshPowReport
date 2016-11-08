angular.module('FreshPowReport').controller('mountainHighCtrl', function($scope, powService) {
    powService.getMountainHigh().then(function(data) {
      //   console.log(data);
        $scope.mountainhigh = data;
    });
});
