function sendEmail(emailData){
  const sentEmail = `To: ${emailData.email}
      From: hello@settled.co.uk
      Subject: Your listing is getting popular
    Content:
    
    Hi ${emailData.name},
    Your listing for ${emailData.address}, ${emailData.postcode} has been viewed over 1000 times. Congratulations!
    Kind regards,
    The Settled Team`

  // ive console logged here instead of in server.js as this function would do the actual sending and return something
  // to indicate success or failure. In this example it cant fail, so it just returns true
  console.log(sentEmail)
  return true

}

module.exports = sendEmail
