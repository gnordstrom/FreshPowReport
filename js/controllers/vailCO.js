angular.module('FreshPowReport').controller('vailCO', function($scope, powService){
  powService.getVail().then(function(data) {
    console.log(data);
    $scope.vail = data;
  });

});
