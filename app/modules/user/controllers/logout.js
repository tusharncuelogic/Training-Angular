'use strict';
    
(function() {
    angular
        .module('user')
        .controller('logoutController',['$scope','$state','localStorageServiceWrapper', logoutController]);
    
    function logoutController($scope , $state , localStorageServiceWrapper) {
    	localStorageServiceWrapper.clearAll();
        $state.go('login');
    }
})();