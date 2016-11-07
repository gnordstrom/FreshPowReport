angular.module('FreshPowReport').controller('eaglepointCtrl', function($scope, powService){
  powService.getEaglePoint().then(function(data) {
    console.log(data);
    $scope.eaglepoint = data;
  });

});
