const moment = require('moment')

class CoreMoment
{
  constructor()
  {
    moment.locale('en')
  }

  getMomentDate(value, locale)
  {
    if(locale)
    {
      const localizedMoment = moment().locale(locale)
      return localizedMoment(value, this.getDateOnlyPlaceholder(locale))
    }
    else
    {
      return moment(value, this.getDateOnlyPlaceholder())
    }
  }

  formatDate(value, valueFormat, isStrict, format, locale)
  {
    if(locale)
    {
      const localizedMoment = moment().locale(locale)
      return localizedMoment(value, valueFormat, isStrict).format(format)
    }
    else
    {
      return moment(value, valueFormat, isStrict).format(format)
    }
  }

  getDateOnlyPlaceholder(locale)
  {
    if(locale)
    {
      const localizedMoment = moment().locale(locale)
      return localizedMoment._locale._longDateFormat.L
    }
    else
    {
      return moment()._locale._longDateFormat.L
    }
  }

  isValid(value, valueFormat, locale)
  {
    if(locale)
    {
      const localizedMoment = moment().locale(locale)
      return localizedMoment(value, valueFormat, true).isValid()
    }
    else
    {
      return moment(value, valueFormat, true).isValid()
    }
  }

  isAfter(date, afterDate, locale)
  {
    if(locale)
    {
      const localizedMoment = moment().locale(locale)
      return localizedMoment(date).isAfter(localizedMoment(afterDate))
    }
    else
    {
      return moment(date).isAfter(moment(afterDate))
    }
  }
}

module.exports = CoreMoment
