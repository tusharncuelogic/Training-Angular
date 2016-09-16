(function() {
    'use strict';

    angular
        .module('user')
        .config(['$stateProvider', stateProvider])
    function stateProvider($stateProvider) {
        $stateProvider
        .state('base.contact', {
            url: '/contact',
            views: {
                'content': {
                    templateUrl: 'app/modules/user/views/contact.html'
                }
            }
        })
        .state('base.user', {
            url: '/add/user',
            views: {
                'content': {
                    templateUrl: 'app/modules/user/views/add_user.html',
                    controller: 'userController'
                }
            }
        })
        .state('base.logout', {
            url: '/logout',
            views: {
                'content': {
                    template: '',
                    controller: 'logoutController'
                }
            }
        });
    }
})();
