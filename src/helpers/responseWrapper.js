// this wrapper ensures our responses to any request are uniform and predictable.
// we always respond with data and error
function responseWrapper(response, res, error = false){

  return res
    .status(response.status || 200)
    .json({
      data: error ? null : response,
      error: error ? response : null
    })

}

module.exports = responseWrapper
