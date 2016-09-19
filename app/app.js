'use strict';

(function() {
    // Declare app level module
    angular
        .module('angularClientApp', [            
            'ui.router',
            'ngAnimate',
            'ngMessages',
            'ngMaterial',
            'md.data.table',
            'angularLazyImg',
            'ui.bootstrap',
            'localStorage.service',
            'config',
            'auth',
            'base',
            'dashboard',
            'user',
            'employees'
        ])
        .run(['$rootScope','$state','authService',run])
        .config(['$urlRouterProvider', '$locationProvider', '$httpProvider',initializeConfigurationPhase])
        .factory('authInterceptor', ['localStorageServiceWrapper','authService',authInterceptor]) ;

    function run($rootScope , $state , authService) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams , fromState, fromParams) {

        // Also add condition for signup as well later
        var currentUser = authService.getCurrentUser();        
        if(currentUser !== null && toState.name == 'login')
        {
            $state.go('base.dashboard') ;
            event.preventDefault();
        }
        else if(currentUser == null && toState.name != 'login')
        {            
            $state.go('login') ;
            event.preventDefault();
        }  
      });
    }

    function initializeConfigurationPhase( $urlRouterProvider, $locationProvider , $httpProvider ) {
        $httpProvider.interceptors.push('authInterceptor') ;        
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }) ;
        $urlRouterProvider.otherwise('/login') ;
    }

    function authInterceptor(localStorageServiceWrapper ,authService ) {
        var authInterceptor = {
            request: function(config) {
                console.log("Interceptors called") ;                
                return config;
            }
        } ;
        return authInterceptor;
    }

})();
