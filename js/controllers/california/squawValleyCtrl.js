angular.module('FreshPowReport').controller('squawValleyCtrl', function($scope, powService) {
    powService.getSquawValley().then(function(data) {
      //   console.log(data);
        $scope.squawvalley = data;
    });
});
