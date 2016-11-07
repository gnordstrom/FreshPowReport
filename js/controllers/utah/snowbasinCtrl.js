angular.module('FreshPowReport').controller('snowbasinCtrl', function($scope, powService){
  powService.getSnowbasin().then(function(data) {
    console.log(data);
    $scope.snowbasin = data;
  });

});
