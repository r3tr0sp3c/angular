// Inside IIFE
(function() {
'use strinct';

angular.module('myApp', [])
.controller('toBuyListController', toBuyListController)
.controller('boughtListController', boughtListController)
.service('listService', listService);

toBuyListController.$inject = ['listService'];
function toBuyListController(listService) {
    var buyList = this;
    buyList.list = listService.buyList;
    
    buyList.clickAway = function(index) {
        listService.clickAway(index);
    }
    

}

boughtListController.$inject = ['listService'];
function boughtListController(listService) {
    var boughtList = this;
    boughtList.list = listService.boughtList;

    boughtList.sendBack = function (index) {
        listService.clickBack(index);
    }
}

function listService() {
    service = this;
    service.buyList = [
        { name: 'Cookies', quantity: 10} ,
        { name: 'Chips', quantity: 5},
        { name: 'Soft Drinks', quantity: 3},
        { name: 'Pastry', quantity: 1},
        { name: 'Cappuccino', quantity: 3}
    ];

    service.boughtList = [];

    service.clickAway = function(index) {
        var item = service.buyList.splice(index,1);
        service.boughtList.push(item[0]);
    }

    service.clickBack = function(index) {
        var item = service.boughtList.splice(index,1);
        service.buyList.push(item[0]);
    }

}

})();