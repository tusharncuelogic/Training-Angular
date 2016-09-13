(function() {
    'use strict';
    angular
        .module('employees')
        .config(['$stateProvider' , stateProvider])

    function stateProvider($stateProvider) {
        $stateProvider
        .state('base.employees', {
            url: '/employees',
            views: {
                'content': {
                    templateUrl:'app/modules/employees/views/employees.html',
                    controller: 'employeesController'
                }
            }
        })
        .state('base.employee', {
            url: '/employee/:Id',
            params:{
                Id:null
            },
            views: {
                'content': {
                    templateUrl: 'app/modules/employees/views/employee.html',
                    controller: 'employeesController'
                }
            }
        }) ;
    }

})();
