//Najeeb Hussaini
//Put lambda function to insert products into the DynamoDB products table on AWS
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient(); //instatiating document client library from dyanodb to interact with database

    let responseBody = "";
    let statusCode = 0;

    const {id, productName} = JSON.parse(event.body);

    const params = {
        TableName: "Products",
        Item: {
            id: id,
            productName: productName
        }
    }

    try {
        const data = await documentClient.put(params).promise(); //add product to database
        responseBody = JSON.stringify(data); //hold our response in string form
        statusCode = 201;
    } catch (err) {
        responseBody = `unable to put product: ${err}`;
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