# Settled - Task

Create a server with an endpoint that sends an email to a user upon their listing receiving 1000 views. 

# To Run

In terminal within settled/src
```
node server
``` 

This will spin the app up on port 8000 - although that can be changed in server.js

# What it does

In order for a successful email send to occur the service requires the following object to be sent to the endpoint /sendEmail from our original microservice 

```
{
  token: "password",
  listingId: "1"
}
``` 

We need the listing Id from the microservice that deals with counting views as well as some kind of token or password so that our email sending service knows the email request has actually come from us.

# Responses

Responses from the service will always be in the following format. If there was no error data will be an object containing the APIs response with error as null. If an error did occur, the inverse is true.  

```
{
  data: {} || null
  error: null || {}
}

```
