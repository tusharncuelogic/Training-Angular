angular.module('auth.service', [])
    .factory('authService', ['localStorageServiceWrapper',authService]) ;

function authService(localStorageServiceWrapper) {
        
    var service = {} ;
    var currentUser = {} ;
    var userList = [{
                "id": 1 ,
                "name": "Prasanna",
                "email":"prasanna@cuelogic.co.in",
                "password":'prasanna',
                "department": "Web Developement",
                "role":"Software developer",
                "age": "25",
                "gender":"Female",
                "salary": 1000,                
                "image": "http://cache4.asset-cache.net/fk/176794537.jpg?v=1&c=IWSAsset&k=1&f=2&d=4575EEE0F3AA8377CD9D0036C287379E479DFF9E20496F56146E8D247CE15381"
            },{
                "id": 2,
                "name": "Ayush",
                "email":"ayush@cuelogic.co.in",
                "password":'ayush#123',
                "department": "Support",
                "salary": 1000,
                "role":"Software developer",
                "age": "22",
                "gender":"Male",
                "image": "resource/images/IMG_3050.JPG"
            }, {
                "id": 3,
                "name": "Nikhil",
                "email":"nikhil@cuelogic.co.in",
                "password":'nikhil#22',
                "department": "Sales",
                "role":"Project Manager",
                "age": "32",
                "gender":"Male",
                "salary": 100000,
                "image": "resource/images/textures-selection-nice-high-resolution_2165080.jpg"
            }, {
                "id": 4,
                "name": "Pratik",
                "email":"pratik@cuelogic.co.in",
                "password":'pratik12',
                "department": "Web Developement",
                "role":"Designer",
                "age": 32,
                "gender":"Male",
                "salary": 20000,
                "image": "resource/images/404.png"
            }, {
                "id": 5,
                "name": "Jayshri",
                "email":"jayshri@cuelogic.co.in",
                "password":'jayshri#22',
                "department": "Testing",
                "role":"Tester",
                "age": 24,
                "gender":"Female",
                "salary": 5500,
                "image": "resource/images/6309_1280x800.jpg"
            }, {
                "id": 6 ,
                "name": "Amol" ,
                "email":"amol@cuelogic.co.in" ,
                "password":'amol#7766' ,
                "department":"Developement" ,
                "role":"Software engineer",
                "age": 24 ,
                "gender":"Male" ,
                "salary": 10500,
                "image": "resource/images/brand-avatar.jpg"
            }, {
                "id": 7,
                "name": "Ganesh",
                "email":"ganesh@cuelogic.co.in",
                "password":'ganesh',
                "department":"Support" ,
                "role":"Support engineer",
                "age": 24 ,
                "gender":"Male" ,
                "salary": 1000,
                "image": "resource/images/ipgeo.png"
            }
        ];

    service.getUsers = getUsers ;
    service.loginUser =  loginUser;
    service.setCurrentUser = setCurrentUser ;
    service.getCurrentUser = getCurrentUser ;

    return service ;

    function setCurrentUser(user) {
        currentUser = user ;
    }

    function getCurrentUser() {
        var user = localStorageServiceWrapper.get('currentUser') ;
        return user;
    }

    function loginUser(user) {
        for(var i = 0; i < userList.length; i++) {
            var dt = userList[i] ;
            if(dt.email == user.email && dt.password == user.password )
            {
                return dt;
            }
        }
        return false;
    }

    function getUsers() {
        return userList ;
    }

    //END
};
