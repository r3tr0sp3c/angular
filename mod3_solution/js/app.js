(function() {
    angular.module('myApp',[])
    .controller("NarrowItDownController", NarrowItDownController )
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", foundItems);

    function foundItems() {
        var ddo = {
            templateUrl: "found-items.html",
            restrict: 'E',
            scope: {
                foundList: "<found",
                onRemove: "&removeItem"
            },
            controller: foundItemsController,
            controllerAs: 'fiCtrl',
            bindToController: true,
            link: foundItemsDirectiveLink
        };

        return ddo;
    }

    function foundItemsController() {
        var fiCtrl = this;
        fiCtrl.showError = function() {

            if (fiCtrl.foundList==null) return false;
            if (fiCtrl.foundList.length>0) {
                return false;
            } else {
                return true;
            }
        };
    }

    function foundItemsDirectiveLink (scope, elements, attrs, controller, transclude) {
        scope.$watch('fiCtrl.showError()', function (newValue, oldValue) {
            if (newValue===true) {
                elements.find('p').css("display" , "block");
            } else {
                elements.find('p').css("display" , "none");
            }
        });
    }

    NarrowItDownController .$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService){
        var mod3Ctrl = this;

        mod3Ctrl.showItems = function() {
            mod3Ctrl.found = MenuSearchService.getMatchedMenuItems(mod3Ctrl.criteria);
        };

        mod3Ctrl.removeItem = function(index) {
            mod3Ctrl.found.splice(index,1);
        }
    }

    MenuSearchService.$inject = ['$http', '$filter'];
    function MenuSearchService($http, $filter) {
        var serv = this;

        serv.getMatchedMenuItems = function(searchTerm) {
            var criteria="";
            if (searchTerm) {
                criteria = $filter('lowercase')(searchTerm.trim());
            }
            var matched = [];

            var fetch = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            })     
            .then(function(result) {
                var array = result.data.menu_items || [];
                for (i=0; i< array.length; i++) {
                    if (($filter('lowercase')(array[i].description).indexOf(criteria)!=-1)&&(criteria)) {
                        matched.push(array[i]);
                    }
                }
            });
            return matched;
        }
    }
})();