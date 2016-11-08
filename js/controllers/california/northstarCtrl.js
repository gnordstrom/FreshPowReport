angular.module('FreshPowReport').controller('northstarCtrl', function($scope, powService) {
    powService.getNorthstar().then(function(data) {
      //   console.log(data);
        $scope.northstar = data;
    });
});
