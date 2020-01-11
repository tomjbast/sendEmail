const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/json
app.use(bodyParser.json())

app.post('/sendEmail', (req, res) => {
  // we take a token/password or something here so that we know the request to send an email came from one of our services
  const {listingId, token} = req.body

  // validate/check token

  // take the listing ID and obtain the data we need from the "database"
    // error if doesnt exist
  // put that data into a sendEmail function - make this generic would be good if this endpoint could be used to send multiple emails
  // send email
    // error if doesnt send


})

app.get('/', function (req, res) {
  res.send('working backend')
})

app.listen(8000, () => console.log(`Example app listening on port 8000!`))
