(function () {
'use strict'; // Enabling things to protect us from making mistakes

    angular.module('adansCalculator', []) // First parameter is the name of the app and the second is the dependencies

    .controller('adanCalculatorController', function($scope) { // '$' followed by a variable is reserved for angular
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function() {
            var totalNameValue = calculateNumericForString($scope.name); 
            $scope.totalValue = totalNameValue;
        };

        function calculateNumericForString(string) {
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
    }); // View Model

})(); // Invoke Function Expression