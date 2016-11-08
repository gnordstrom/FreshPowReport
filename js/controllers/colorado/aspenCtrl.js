angular.module('FreshPowReport').controller('aspenCtrl', function($scope, powService) {
    powService.getAspen().then(function(data) {
        console.log(data);
        $scope.aspen = data;
    });
});
