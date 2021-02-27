//Najeeb Hussaini
//Put lambda function to update products into the DynamoDB products table on AWS
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient(); //instatiating document client library from dyanodb to interact with database

    let responseBody = "";
    let statusCode = 0;

    const {id, productName} = JSON.parse(event.body); //to grab info to update

    const params = {
        TableName: "Products",
        Key: {
            id: id
          
        },
        UpdateExpression: "set productName = :n",
        ExpressionAttributeValues: {
            ":n": productName
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        const data = await documentClient.update(params).promise(); //update product to database
        responseBody = JSON.stringify(data); //hold our response in string form
        statusCode = 204;
    } catch (err) {
        responseBody = `unable to update product: ${err}`;
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