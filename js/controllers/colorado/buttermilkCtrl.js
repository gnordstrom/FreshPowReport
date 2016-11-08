angular.module('FreshPowReport').controller('buttermilkCtrl', function($scope, powService) {
    powService.getButtermilk().then(function(data) {
        console.log(data);
        $scope.buttermilk = data;
    });

});
