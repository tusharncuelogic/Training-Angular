angular.module('employees').directive("alertButton",["$window",function($window) {
    return {
        restrict: 'E' ,        
        scope: {        	
        	ondelete:"&",
        	btnClass:"@"
        },
        template: '<md-button ng-click="ondelete()" ng-class="btnClass">Delete</md-button>'
    }
}]);