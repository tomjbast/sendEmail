// these could also be arrays of opbjects as they normally would in a real environment.
// however with such small data sets objects are easier to use
const users = {
  1: {
    name: "Mike",
    surname: "Kirilov",
    email: "mike@me.com"
  }
}

const listings = {
  1: {
    userId: "1",
    address: "72 Long Road",
    postcode: "SE7 8ST"
  }
}

module.exports = {
  users,
  listings
}
