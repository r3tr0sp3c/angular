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
                var count= 0; // string counter initialization
                
                var items = $scope.menuList.split(','); // Split user entry

                for (var i=0; i<items.length; i++) {

                    var temp = items[i].trim(); // Remove white space

                    count = (temp)?++count:count ; // Don't count empty strings

                    items[i] = temp;
                }

                if (count<=3) {
                    $scope.output = "Enjoy!";
                    $scope.className = "colorGreen";
                }
                
                if (count>3) {
                    $scope.output = "Too much!";
                    $scope.className = "colorRed";
                }

                

            }
            
        }

    }


})();