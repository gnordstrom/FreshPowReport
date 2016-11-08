angular.module('FreshPowReport').controller('sugarBowlCtrl', function($scope, powService) {
    powService.getSugarBowl().then(function(data) {
      //   console.log(data);
        $scope.sugarbowl = data;
    });
});
