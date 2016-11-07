angular.module('FreshPowReport').controller('powdermountainCtrl', function($scope, powService){
  powService.getPowderMountain().then(function(data) {
    console.log(data);
    $scope.powdermountain = data;
  });

});
