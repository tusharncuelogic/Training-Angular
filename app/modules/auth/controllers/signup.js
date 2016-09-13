'use strict';

(function() {

    angular
        .module('auth')
        .controller('signupController', ['$scope', '$state', 'authService', signupController]);

    function signupController($scope, $state ,authService) {
    	$scope.user = {};
        console.log("Inside signup controller") ;
        $scope.doLogin = function()
        {
        	var isLogin = authService.loginUser($scope.user);   
        	if(isLogin == '')
        	{
        		
        	}   	
        	else
        	{
        		authService.setCurrentUser(isLogin);
        		console.log("Current user is");
        		console.log(curUser);
        	}        	
        }
    }

})();
