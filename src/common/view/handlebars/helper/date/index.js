class CoreHandlebarsHelperDate
{
  constructor(moment)
  {
    this.moment = moment
  }

  create()
  {
    const moment = this.moment
    return (date, valueFormat, format, isStrict) =>
    {
      if(date)
        return moment.formatDate(date, valueFormat, isStrict, format)
    }
  }
}

module.exports = CoreHandlebarsHelperDate
