angular.module('FreshPowReport').controller('copperCtrl', function($scope, powService) {
    powService.getCopper().then(function(data) {
        console.log(data);
        $scope.copper = data;
    });

});
