class CoreMoment
{
  constructor(moment, locale)
  {
    this.moment = moment
    this.setLocale(locale)
  }

  getMomentDate(value)
  {
    return this.moment(value, this.getDateOnlyPlaceholder())
  }

  formatDate(value, valueFormat, isStrict, format)
  {
    return this.moment(value, valueFormat, isStrict).format(format)
  }

  getDateOnlyPlaceholder()
  {
    return this.moment()._locale._longDateFormat.L
  }

  isDateValid(value, valueFormat)
  {
    return this.moment(value, valueFormat, true).isValid()
  }

  setLocale(locale)
  {
    this.moment.locale(locale)
  }
}

module.exports = CoreMoment
