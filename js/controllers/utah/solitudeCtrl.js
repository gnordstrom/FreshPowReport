angular.module('FreshPowReport').controller('solitudeCtrl', function($scope, powService){
  powService.getSolitude().then(function(data) {
    console.log(data);
    $scope.solitude = data;
  });

});
