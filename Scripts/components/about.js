
angular.module('About', [])
    .controller('AboutController', function ($scope) {
        $scope.NameChange = function () {
            $scope.greeting = "Hello " + $scope.name;
        };
    });
