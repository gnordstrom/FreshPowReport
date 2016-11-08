angular.module('FreshPowReport').controller('beavercreekCtrl', function($scope, powService) {
    powService.getBeaverCreek().then(function(data) {
        console.log(data);
        $scope.beavercreek = data;
    });

});
