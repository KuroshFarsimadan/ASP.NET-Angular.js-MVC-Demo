
angular.module('Contact', [])
    .controller('ContactController', function ($scope) {
        $scope.NameChange = function () {
            $scope.greeting = "Hello " + $scope.name;
        };
    });
