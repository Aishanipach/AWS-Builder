//This will be your index.js in AWS lambda Code Editor for Node.js 16x runtime
//Here we are trying to access a DynamoDB table which does not exist, which throws ResourceNotFoundException 
const AWS = require("aws-sdk")
AWS.config.update({ region: "ap-south-1" })
const dynamoDB = new AWS.DynamoDB.DocumentClient()

exports.lambdaHandler = async (event, context) => {
    console.log("event", event.name);
    dynamoDB.get({
    TableName: "tableDoesNotExist",
    Key: {
      id: "1", // id is the Partition Key, '123' is the value of it
    },
  })
  .promise()
  .then(data => console.log(data.Item))
  .catch(console.error)
    
    return 0;
};
