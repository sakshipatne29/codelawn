import express from "express";
import AWS from "aws-sdk";

const router = express.Router();

AWS.config.update({
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-1",
});


// this end point will create user record
router.post("/createUser", (request, response) => {
    try {

      //creating dynamoDB client
      const docClient = new AWS.DynamoDB.DocumentClient();

      //creating user_details record/object
      var details = {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        user_email: request.body.user_email,
        user_password: request.body.user_password,
        creation_timestamp: new Date().toUTCString()
      }
      console.log(details);

      //creating dynamoDB params object
      const params = {
        TableName: "user_details",
        Item: details,
      };

      //updating the record in dynamoDB (database)
      docClient.put(params, function (err, data) {
        if (err) {
          console.log("Error", err);
          throw err;
        } else {
          console.log("Success", data);
        }
      });
      console.log("User is successfully created");

      //sending successful response
      response.send({
        status: "success",
        message: "User created successfully",
      });
    } catch (error) {
      console.log("Error in createUser endpoint: " + error);
      console.log(error.stack);
      response.send({
        status: "failed",
        message: error,
      });
    }
  });


export default router;