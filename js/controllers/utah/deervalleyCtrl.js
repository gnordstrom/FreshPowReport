angular.module('FreshPowReport').controller('deervalleyCtrl', function($scope, powService){
  powService.getDeerValley().then(function(data) {
    console.log(data);
    $scope.deervalley = data;
  });

});
