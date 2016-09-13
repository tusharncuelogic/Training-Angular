'use strict';
(function() {
    angular
        .module('base')
        .controller('baseController', ['$scope', '$state', 'menuService', baseController]);

    function baseController($scope, $state, menuService) {
        console.log("Inside Base Controller");
        //calling API and get menus
        $scope.getMenus = menuService.getSidebarMenuList().userMenu;
    }
    
})();
