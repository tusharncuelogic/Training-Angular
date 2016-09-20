'use strict';
(function() {
    angular
        .module('auth')
        .controller('loginController',['$scope','$state','authService',
            'localStorageServiceWrapper','$timeout','$location','$mdDialog',loginController]) ;

    function loginController($scope,$state,authService,localStorageServiceWrapper,$timeout, $location , $mdDialog ) {
    	$scope.user = {} ;
        $scope.doLogin = function()
        {            
        	var isLogin = authService.loginUser($scope.user);
            
            //Loading dialog in progress
            /*var dialog = {
                clickOutsideToClose: false,
                escapeToClose:false,
                template:'<md-dialog aria-label="Loading" class="overlay">' +
                '<md-progress-circular md-diameter="50" md-mode="indeterminate"></md-progress-circular>'+'</md-dialog>' ,
                hasBackdrop:true,
                onRemoving:function(){console.log("Closing");}
            }
            $mdDialog.show(dialog).then(function(){console.log("canlled 111")},function(){console.log("canlled")});*/

        	if(isLogin == '')
        	{
        		$mdDialog.show(           
                    $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title("Invalid Email/Password")
                    .ok('OK')
                );
        	}
        	else
        	{
                localStorageServiceWrapper.set('currentUser',isLogin);
                $timeout(function() {
                    $location.path('/dashboard');
                }, 1500);                
        	}
        }
    }
})();
