angular.module('FreshPowReport').controller('altaCtrl', function($scope, powService){
  powService.getAlta().then(function(data) {
    console.log(data);
    $scope.alta = data;
  });

});
