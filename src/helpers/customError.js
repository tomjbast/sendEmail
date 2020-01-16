// where we can catch common errors this ensures our error messaging is clean and uniform across the API
class SettledError extends Error {
  constructor(status, label, message){
    super()

    this.status = status
    this.label = label
    this.message = message

  }
}

module.exports = SettledError
