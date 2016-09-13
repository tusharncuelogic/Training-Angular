'use strict';
(function() {

    angular
        .module('auth')
        .config(['$stateProvider', stateProvider]);

    function stateProvider($stateProvider) {

        

        $stateProvider
        .state('signup', {
            url: '/signup',
            views: {
                '@': {
                    templateUrl:'app/modules/auth/views/signup.html',
                    controller: 'signupController'
                }
            }
        })
        .state('login', {
            url: '/login',
            views: {
                '@': {
                    templateUrl: 'app/modules/auth/views/login.html',
                    controller: 'loginController'
                }
            }
        });
    }
})();
