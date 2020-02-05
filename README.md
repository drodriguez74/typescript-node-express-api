# typescript-node-express-api
This was build using boilerplate code, a Hello World example. I just added the addition routes to support the endpoints. 
The application must expose restful endpoints that will parse data (passed in the request body) and return the value back to the client. The API will have two versions and depending on the version endpoint, the parsing of the data will return a different value back to the client.

Endpoints
/api/v1/parse (POST)
/api/v2/parse (POST)

Request Body
{
    data: “JOHN0000MICHAEL0009994567”
}

Expected Results
/api/v1/parse – Response Body
{
    statusCode: 200,
    data:  {
        firstName: “JOHN0000”,
        lastName: “MICHAEL000”,
        clientId: “9994567”
    }
}

/api/v2/parse – Response Body
{
    statusCode: 200,
    data:  {
        firstName: “JOHN”,
        lastName: “MICHAEL”,
        clientId: “999-4567”
    }
}

