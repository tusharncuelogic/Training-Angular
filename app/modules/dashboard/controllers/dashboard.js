(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController',['$scope', '$state', 'dashboardService','authService',dashboardController]) ;

    function dashboardController($scope, $state, dashboardService , authService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.user = authService.getCurrentUser();
    }

})();
