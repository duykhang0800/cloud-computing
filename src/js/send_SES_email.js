// Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// // Set the region 
// AWS.config.loadFromPath('../config.json');

var getVar = require("./variables")

var AWS = getVar.configAWS();

var CcAddresses = getVar.getCCAdd();
var toAddresses = getVar.getToAdd();
var sourceAddresses = getVar.getSourceAdd();
var ReplyToAddresses = getVar.getRepAdd();  

module.exports.sendMail = () => {
// Create sendEmail params 
var params = {
  Destination: { /* required */
    CcAddresses: [
      CcAddresses
      /* more items */
    ],
    ToAddresses: [
      toAddresses
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "<a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>"
      }, 
      Text: {
      },
      Text: {
       Charset: "UTF-8",
       Data: "testing, write something in here"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: sourceAddresses, /* required */
  ReplyToAddresses: [
     ReplyToAddresses
    /* more items */
  ],
};

// Create the promise and SES service object
var email = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params);
var sendPromise = email.promise();

console.log(email);

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
}