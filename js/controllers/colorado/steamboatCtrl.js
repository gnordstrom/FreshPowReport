angular.module('FreshPowReport').controller('steamboatCtrl', function($scope, powService) {
    powService.getSteamboat().then(function(data) {
        console.log(data);
        $scope.steamboat = data;
    });
});
