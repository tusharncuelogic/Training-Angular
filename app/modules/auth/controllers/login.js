'use strict';
(function() {

    angular
        .module('auth')
        .controller('loginController',['$scope','$state','authService',
            'localStorageServiceWrapper','$timeout','$location',loginController]) ;

    function loginController($scope,$state,authService,localStorageServiceWrapper,$timeout, $location ) {
    	$scope.user = {} ;
        $scope.doLogin = function()
        {
            $scope.error = '';
            $scope.success = '';
        	var isLogin = authService.loginUser($scope.user);        	
        	if(isLogin == '')
        	{
        		$scope.error = "Invalid credentials";
        	}
        	else
        	{
                $scope.success = "Success . Redirecting to dashboard";
                localStorageServiceWrapper.set('currentUser',isLogin);
                $timeout(function() {
                    $location.path('/dashboard');
                }, 1500);                
        	}        	
        }
    }
})();
