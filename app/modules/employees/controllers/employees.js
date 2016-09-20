(function() {
    'use strict';
    angular
        .module('employees')
        .controller('employeesController',['$scope','$state','employeesService',
            '$stateParams','$mdToast','$mdDialog','$location',employeesController]) ;

    function employeesController($scope,$state,employeesService,$stateParams, $mdToast , $mdDialog , $location) {
        $scope.departments = ["Software Developement" , "Support", "Testing"] ;
        $scope.roles = ["Software engineer","Software developer","Team Leader","Project Maneger","Designer","Web developer","Tester"];
        $scope.heading = 'Add Employee' ;
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.employee = {image:"http://lorempixel.com/150/100/"} ;
        $scope.error = ''  ; 
        $scope.success = '';
        $scope.actives = [];
        $scope.sorts = [{key:"name",value:"Name"},{key:"email",value:"Email"},{key:"department",value:"Department"}];
        $scope.sortv = $scope.sorts[0];
        $scope.employees = employeesService.getEmployees();
        $scope.alert = "Sure to delete ?";                
        if($stateParams.Id)
        {
            console.log("Update employees") ;
            $scope.heading = 'Update Employee' ;
            for(var i = 0; i < $scope.employees.length; i++) {
                var dt = $scope.employees[i] ;
                if($stateParams.Id == dt.id)
                {
                    $scope.employee = dt;
                }
            }
        }

        console.log($scope.employee);

        $scope.deleteSelected = function()
        {
            if($scope.actives.length < 1)
            {
                $mdDialog.show(
                  $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title("No employees selected. Please select at least 1 employee .")
                    .ok('Got it!')
                );
            }
            else
            {
                var confirm = $mdDialog.confirm()
                  .title("Are you sure to delete the selected employees ?")
                  .ok('Delete')
                  .cancel('Cancel') ;

                $mdDialog.show(confirm).then(function() {
                    for(var i = 0; i < $scope.employees.length; i++) {
                        var dt = $scope.employees[i] ;
                        if($scope.actives.indexOf(dt.id) > -1)
                        {
                            $scope.employees.splice(i--,1) ;
                        }
                    }
                }); 

               
            }           
        }

        $scope.dblClick = function(empId) {
            $state.go('base.employee',{Id:empId});
        }

        $scope.toggleActive = function(empId) {
            if($scope.actives.indexOf(empId) > -1)
            {
                $scope.actives.splice($scope.actives.indexOf(empId) , 1) ;
            }
            else
            {
                $scope.actives.push(empId) ;
            }                        
        }

        $scope.setClass= function(empId)
        {
            if($scope.actives.indexOf(empId) > -1)
            {                
                return "card_success";
            }
            else
            {
                return "";
            }            
        }

        $scope.sortby = function(field) {            
            var sorted = $scope.employees.slice(0);
            sorted.sort(function(a,b) {
                var x = a[field].toLowerCase();
                var y = b[field].toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            }) ;
            $scope.employees = sorted;          
        }

        $scope.showSimpleToast = function()
        {
            console.log("Simple toast displayed");
            $mdToast.show(
              $mdToast.simple()
                .textContent('Simple Toast!')
                .position('bottom center' )
                .hideDelay(3000)
            );

        }

        $scope.delete = function(empId , alertText)
        {
            if(!alertText)
            {
                alertText = $scope.alert;
            }
            
            var idx = null ;
            var isDelete = null;
            for(var i = 0; i < $scope.employees.length; i++) {
                var dt = $scope.employees[i] ;
                if( dt.id == empId)
                {
                    isDelete = 1 ;
                    idx = i;
                }
            }            
            
            var confirm = $mdDialog.confirm()
              .title(alertText)
              .ok('Delete')
              .cancel('Cancel');
           
            if(isDelete)
            {
                $mdDialog.show(confirm).then(function() {
                    $scope.employees.splice(idx,1) ;
                    $scope.success = "Employee deleted successfully" ;
                });           
            }
            else
            {
                $scope.error = "Error in deleting employee" ;
            }
        }

        $scope.addEmployee = function() {
            var isExist = null;
            for(var i = 0; i < $scope.employees.length; i++) {
                var dt = $scope.employees[i] ;
                if($scope.employee.email == dt.email)
                {
                    isExist = 1 ;
                }
            }

            if(isExist)
            {
                $mdDialog.show(
                  $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title("Employee already exist with given email id.")
                    .ok('Got it!')
                );                
            }
            else
            {
                $scope.employees.push($scope.employee);
                $location.path('/employees');
                
            }
        }

        $scope.updateEmployee = function() {
            for(var i = 0; i < $scope.employees.length; i++) {
                var dt = $scope.employees[i];
                if($stateParams.Id == dt.id)
                {

                    $scope.employees.splice(i,1) ;
                }
            }
            $scope.employees.push($scope.employee);   
            $location.path('/employees') ;
        }

        $scope.processEmp = function() {
            $scope.error = '';
            $scope.success = '';   
            $scope.employees = employeesService.getEmployees();       
            if($stateParams.Id)
            {
                $scope.updateEmployee();
            }
            else
            {
                $scope.addEmployee();
            }
        }               
    }

})();
