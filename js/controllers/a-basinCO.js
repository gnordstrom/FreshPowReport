angular.module('FreshPowReport').controller('aBasinCO', function($scope, powService){
  powService.getAbasin().then(function(data) {
    console.log(data);
    $scope.aBasin = data;
  });

});
