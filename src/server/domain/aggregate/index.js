class Aggregate
{
  method({ })
  {
    // fetchEventlog
    // validate preconditions
    try
    {
      // STEP
      // lazy load
      // map input
      // command(input)
      // save result in eventsource
    }
    catch(error)
    {
      // save error in eventsource
      // map error to domain error
      // throw domain error
    }
  }
}

module.exports = Aggregate
