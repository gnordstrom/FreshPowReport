angular.module('FreshPowReport').controller('keystoneCtrl', function($scope, powService) {
    powService.getKeystone().then(function(data) {
        console.log(data);
        $scope.keystone = data;
    });
});
