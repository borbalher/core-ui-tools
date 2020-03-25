class ErrorToMessageMapper
{
  map(data)
  {
    const { error, code } = data

    return {
      message : code ? `${message} (Code: ${code})` : error.message
    }
  }
}

module.exports = ErrorToMessageMapper
