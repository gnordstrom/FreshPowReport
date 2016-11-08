angular.module('FreshPowReport').controller('sierraCtrl', function($scope, powService) {
    powService.getSierraAtTahoe().then(function(data) {
      //   console.log(data);
        $scope.sierra = data;
    });
});
