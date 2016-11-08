angular.module('FreshPowReport').controller('alpineMeadowsCtrl', function($scope, powService) {
    powService.getAlpineMeadows().then(function(data) {
      //   console.log(data);
        $scope.alpinemeadows = data;
    });
});
