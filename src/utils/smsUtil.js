const twilio = require("twilio");

const client = twilio(
  process.env.twilio_account_sid,
  process.env.twilio_auth_token
);

const sendMessage = (number,message) => {
  const senderNumber = "+13612648897";
  client.messages
    .create({
      body: message,
      from: senderNumber,
      to: number,
    })
    .then((message) => console.log("Message Sent"))
    .catch((err) => console.log(err));
};

module.exports = sendMessage
