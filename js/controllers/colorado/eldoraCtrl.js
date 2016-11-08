angular.module('FreshPowReport').controller('eldoraCtrl', function($scope, powService) {
    powService.getEldora().then(function(data) {
        console.log(data);
        $scope.eldora = data;
    });
});
