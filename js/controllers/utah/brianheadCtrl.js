angular.module('FreshPowReport').controller('brianheadCtrl', function($scope, powService) {
    powService.getBrianHead().then(function(data) {
        console.log(data);
        $scope.brianhead = data;
    });

});
