angular.module('FreshPowReport').controller('klappenCtrl', function($scope, powService){
  powService.getKlappen().then(function(data) {
    console.log(data);
    $scope.klappen = data;
  });

});
