angular.module('FreshPowReport').controller('breckenridgeCtrl', function($scope, powService) {
    powService.getBreckenridge().then(function(data) {
        console.log(data);
        $scope.breckenridge = data;
    });

});
