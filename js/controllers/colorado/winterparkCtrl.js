angular.module('FreshPowReport').controller('winterparkCtrl', function($scope, powService) {
    powService.getWinterPark().then(function(data) {
        console.log(data);
        $scope.winterpark = data;
    });
});
