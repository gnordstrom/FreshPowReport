angular.module('FreshPowReport').controller('parkCityUT', function($scope, powService){
  powService.getPC().then(function(data) {
    // console.log(data);
    $scope.parkCity = data;
  });
});
