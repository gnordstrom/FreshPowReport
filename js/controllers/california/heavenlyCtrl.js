angular.module('FreshPowReport').controller('heavenlyCtrl', function($scope, powService) {
    powService.getHeavenly().then(function(data) {
      //   console.log(data);
        $scope.heavenly = data;
    });
});
