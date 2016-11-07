angular.module('FreshPowReport').controller('nordicvalleyCtrl', function($scope, powService){
  powService.getNordicValley().then(function(data) {
    console.log(data);
    $scope.nordicvalley = data;
  });

});
