(function(){
    'use strict';
    angular.module('mod1_solution', [])
    .controller('mod1_controller', mod1Controller);

    mod1Controller.$inject = ['$scope'];

    function mod1Controller($scope) {

        $scope.mod1Ctrl = function() {

            if (!$scope.menuList) {
                $scope.output = "Please enter data!";
            } else {
                // Split user entry
                const items = $scope.menuList.split(',');

                // Remove white space
                for (var i=0; i<items.length; i++) {
                    items[i] = items[i].trim();
                }

                if (items.length<=3) {
                    $scope.output = "Enjoy!"
                }
                
                if (items.length>3) {
                    $scope.output = "Too much!";
                }

            }
            
        }

    }


})();