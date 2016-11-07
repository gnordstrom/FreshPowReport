angular.module('FreshPowReport').controller('sundanceCtrl', function($scope, powService){
  powService.getSundance().then(function(data) {
    console.log(data);
    $scope.sundance = data;
  });

});
