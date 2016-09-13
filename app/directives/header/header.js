angular.module('base').directive("headerMenu", ['authService',headerMenu]) ;
function headerMenu(authService) {
    return {
        restrict: "EA",
        scope: { },
        templateUrl: "app/directives/header/views/header.html",
        link: function(scope,elem,attr) {
            var currentUser =  authService.getCurrentUser();
            scope.username = currentUser.name ;
            // code goes here ...
        }
    };
}
