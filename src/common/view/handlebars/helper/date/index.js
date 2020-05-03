class CoreHandlebarsHelperDate
{
  constructor(moment)
  {
    this.moment = moment
  }

  create()
  {
    return function (date, valueFormat, format, isStrict)
    {
      if(date)
        return this.moment.formatDate(date, valueFormat, isStrict, format)
    }
  }
}

module.exports = CoreHandlebarsHelperDate
