//Najeeb Hussaini
//Put lambda function to delete products into the DynamoDB products table on AWS
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient(); //instatiating document client library from dyanodb to interact with database

    let responseBody = "";
    let statusCode = 0;

    const {id} = event.pathParameters; //to access id needed to delete 

    const params = {
        TableName: "Products",
        Key: {
            id: id
        }
    };

    try {
        const data = await documentClient.delete(params).promise(); //delete product to database
        responseBody = JSON.stringify(data); //hold our response in string form
        statusCode = 204;
    } catch (err) {
        responseBody = `unable to delete product: ${err}`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*" //Allow any domain to access this rest api
        },
        body: responseBody
    };

    return response;
};