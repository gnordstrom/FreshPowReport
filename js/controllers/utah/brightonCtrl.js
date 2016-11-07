angular.module('FreshPowReport').controller('brightonCtrl', function($scope, powService){
  powService.getBrighton().then(function(data) {
    console.log(data);
    $scope.brighton = data;
  });

});
