angular.module('FreshPowReport').controller('mtBaldyCtrl', function($scope, powService) {
    powService.getMtBaldy().then(function(data) {
      //   console.log(data);
        $scope.mtbaldy = data;
    });
});
