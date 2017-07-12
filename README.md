# nodeauth
This is a complete initial setup of APIs with authentication in node. Technology includes node, mongoose, express, JWT, passportjs. Download and use this app as initial setup of node apis and enhance it according to your requirements.. 

# Example APIs

# 1) Register API

URL: http://localhost:2000/users/register

Request Type: POST

Headers- 
Content-Type:application/json

Body Params: 
{
"name":"prashant bhatt",
"email":"ppgeu89@gmail.com",
"password":"test",
"username":"prashant"
}

Response:- 

{
    "success": true,
    "msg": "User Registered"
}

# 2) Authenticate API

URL: http://localhost:2000/users/authenticate

Request Type: POST

Headers- 
Content-Type:application/json

Body Params: 
{
	"password":"test",
	"username":"prashant"
}

Response:- 

{
    "success": true,
    "token": "JWT token string",
    "user": {
        "id": "59653c1fdcb0d5398830010a",
        "name": "prashant",
        "username": "prashant",
        "email": "ppgeu89@gmail.com"
    }
}

# Note - This token will be used in all future calls 

3) Get User Profile (A call to check if token verification working)

URL: http://localhost:2000/users/profile

Request Type: GET

Headers- 
Content-Type:application/json
Authorization:JWT Tken HERE

Response:- 
{
    "msg": "hiii"
}


Enhance the API by creating your own Controllers and models.
