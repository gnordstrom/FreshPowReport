angular.module('FreshPowReport').controller('monarchCtrl', function($scope, powService) {
    powService.getMonarch().then(function(data) {
        console.log(data);
        $scope.monarch = data;
    });
});
