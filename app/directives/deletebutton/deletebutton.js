angular.module('employees').directive("alertButton",["$window",function($window) {
    return {
        restrict: 'E' ,        
        scope: {        	
        	ondelete:"&",
        	btnClass:"@"
        },
        template: '<button ng-click="ondelete()" ng-class="btnClass">Delete</button>'
    }
}]);