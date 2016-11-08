angular.module('FreshPowReport').controller('homewoodCtrl', function($scope, powService) {
    powService.getHomewood().then(function(data) {
      //   console.log(data);
        $scope.homewood = data;
    });
});
