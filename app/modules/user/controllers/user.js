'use strict';
(function() {
    angular
        .module('user')
        .controller('userController',['$scope','$state','localStorageServiceWrapper', userController]);

    function userController($scope , $state,localStorageServiceWrapper) {    	    	
    	if($state.current.name == 'base.logout')
    	{
    		localStorageServiceWrapper.clearAll();
    		$state.go('base.login');
    	}
        $scope.setTitle = 'Add user' ;
    }
})();