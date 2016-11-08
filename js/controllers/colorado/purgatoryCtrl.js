angular.module('FreshPowReport').controller('purgatoryCtrl', function($scope, powService) {
    powService.getPurgatory().then(function(data) {
        console.log(data);
        $scope.purgatory = data;
    });
});
