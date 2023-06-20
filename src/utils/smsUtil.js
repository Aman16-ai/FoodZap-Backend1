const twilio = require("twilio");

const client = twilio(
  "AC9c5572b1664f0442c08d307cbb3ab8be",
  "2cdd07a52fdfd2bf3ed3cb57bd04234a"
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
