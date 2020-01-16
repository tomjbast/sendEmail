const express = require('express')
const bodyParser = require('body-parser')

const checkToken = require('./helpers/checkToken')
const SettledError = require('./helpers/customError')
const responseWrapper = require('./helpers/responseWrapper')
const sendEmail = require('./helpers/sendEmail')
const {users, listings} = require ('./database')

const app = express()

// parse application/json
app.use(bodyParser.json())

app.post('/sendEmail', (req, res) => {
  // we take a token/password or something here so that we know the request to send an email came from one of our services
  // we get given the listingId from the microservice that updated the listingsViews table
  const {listingId, token} = req.body

  const isTokenValid = checkToken(token)
  if (!isTokenValid){
    return responseWrapper(new SettledError(403, "ERR_TOKEN_INVALID", "You do not have permission to access this service"), res, true)
  }

  // normally these three lines would be SQl and require try/catch with async await to catch any errors
  const listing = listings[listingId]
  const userId = listing.userId
  const user = users[userId]

  const emailData = {
    email: user.email,
    name: user.name,
    address: listing.address,
    postcode: listing.postcode
  }

  const emailResponse = sendEmail(emailData)
  if (!emailResponse){
    return responseWrapper(new SettledError(403, "ERR_EMAIL_FAIL", "The requested email failed to send"), res, true)
  }

  return responseWrapper("Everything worked! Email will be console logged", res)
})

app.get('/', function (req, res) {
  res.send('working backend')
})

app.listen(8000, () => console.log(`Example app listening on port 8000!`))
