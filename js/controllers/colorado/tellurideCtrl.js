angular.module('FreshPowReport').controller('tellurideCtrl', function($scope, powService) {
    powService.getTelluride().then(function(data) {
        console.log(data);
        $scope.telluride = data;
    });
});
