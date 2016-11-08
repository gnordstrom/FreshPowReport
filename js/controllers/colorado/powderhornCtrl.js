angular.module('FreshPowReport').controller('powderhornCtrl', function($scope, powService) {
    powService.getPowderhorn().then(function(data) {
        console.log(data);
        $scope.powderhorn = data;
    });
});
