angular.module('FreshPowReport').controller('kirkwoodCtrl', function($scope, powService) {
    powService.getKirkwood().then(function(data) {
      //   console.log(data);
        $scope.kirkwood = data;
    });
});
