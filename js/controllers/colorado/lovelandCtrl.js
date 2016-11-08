angular.module('FreshPowReport').controller('lovelandCtrl', function($scope, powService) {
    powService.getLoveland().then(function(data) {
        console.log(data);
        $scope.loveland = data;
    });
});
