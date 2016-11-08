angular.module('FreshPowReport').controller('mammothCtrl', function($scope, powService) {
    powService.getMammoth().then(function(data) {
      //   console.log(data);
        $scope.mammoth = data;
    });
});
