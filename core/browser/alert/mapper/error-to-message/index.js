class ErrorToMessageMapper
{
  map(data)
  {
    const { message, code } = data

    return {
      message : code ? `${message} (Code: ${code})` : message
    }
  }
}

module.exports = ErrorToMessageMapper
