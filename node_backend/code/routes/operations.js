import express from "express";
import AWS from "aws-sdk";

const router = express.Router();

// const AWS = require("aws-sdk");
AWS.config.update({
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-1",
});



router.post("/createApp", (request, response) => {
  try {
    console.log(request.body);
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "app_details",
      Item: request.body,
    };
    docClient.put(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
    response.send({
      status: "success",
      message: request.body.app_name,
    });
  } catch (error) {
    console.log("Error in creatApp endpoint: " + error);
    console.log(error.stack);
    response.send({
      status: "failed",
      message: error,
    });
  }
});

router.get("/list", (req, res) => {
  // console.log(`process.env.AWS_ACCESS_ID ${process.env.AWS_ACCESS_KEY_ID}`);
  // console.log(`process.env.AWS_SECRET_ID ${process.env.AWS_SECRET_ACCESS_KEY}`);
  try {
    console.log(`Serving request`);
    console.log(req);
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "app_details",
    };
    docClient.scan(params, function (err, data) {
      if (err) {
        console.log(err.stack);
        res.send({
          status: "failed",
          message: err,
        });
      } else {
        const { Items } = data;
        res.send({
          status: "success",
          message: Items,
        });
      }
    });
  } catch (error) {
    console.log("Error in listing endpoint: " + error);
    console.log(error.stack);
  }
  // res.send("hello");
});

export default router;
