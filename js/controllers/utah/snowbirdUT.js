angular.module('FreshPowReport').controller('snowbirdUT', function($scope, powService){
  powService.getSnowbird().then(function(data) {
    console.log(data);
    $scope.snowbird = data;
  });

});
