angular.module('FreshPowReport').controller('bearValleyCtrl', function($scope, powService) {
    powService.getBearValley().then(function(data) {
      //   console.log(data);
        $scope.bearvalley = data;
    });
});
