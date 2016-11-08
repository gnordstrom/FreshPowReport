angular.module('FreshPowReport').controller('dodgeRidgeCtrl', function($scope, powService) {
    powService.getDodgeRidge().then(function(data) {
      //   console.log(data);
        $scope.dodgeridge = data;
    });
});
