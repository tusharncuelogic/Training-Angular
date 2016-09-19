var sendOut = function(fname , lname , cb) {
	var res  = "First name is "+fname + " and last name is "+lname ;
	cb(res);
}

module.exports = [{
        method: 'GET',
        path: '/resource/{param*}',
        handler: {
            directory: {
                path: 'build/resource'
            }
        }
    }, {
        method: 'GET',
        path: '/app/{param*}',
        handler: {
            directory: {
                path: 'app'
            }
        }
    }, {
        method: 'GET',
        path: '/{path*}',
        handler: function(request, reply) {
            reply.file('./build/index.html') ;
        }
    },{
        method: 'GET',
        path: '/api/{param*}',
        handler:function(request , response) {
            sendOut("Tushar","Nikam",function(err , data ){
            	if(err)
            	{
            		console.log("Error occured");
            		response(err);
            	} 
            	else
            	{
            		response(data);
            	}           	
            	
            });
        }
    }];