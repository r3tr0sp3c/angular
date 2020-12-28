angular.module('myApp', [])
.controller('toBuyListController', toBuyListController)
.controller('boughtListController', boughtListController);

function toBuyListController() {
    var buyList = this;
    buyList.list = [{ name: 'Cookies', quantity: 10} ,
                { name: 'Chips', quantity: 5},
                { name: 'Soft Drinks', quantity: 3},
                { name: 'Pastry', quantity: 1},
                { name: 'Cappuccino', quantity: 3}];
    
    buyList.showIndex = function(index) {
        console.log(index);
    }
    

}

function boughtListController() {
    var boughtList = this;
}