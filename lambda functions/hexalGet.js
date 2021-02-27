//Najeeb Hussaini
//Put lambda function to get products into the DynamoDB products table on AWS
'use strict';
const AWS = require('aws-sdk');

module.exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient(); //instatiating document client library from dyanodb to interact with database

    let responseBody = "";
    let statusCode = 0;

    const params = {
        TableName: "Products",
    }

    try {
        const data = await documentClient.scan(params).promise(); //add new product to database
        responseBody = JSON.stringify(data.Items); //grab all the products we have
        statusCode = 200;
    } catch (err) {
        responseBody = `unable to get products: ${err}`;
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