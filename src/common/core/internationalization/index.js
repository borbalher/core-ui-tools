class Internationalization
{
  constructor({
    dictionaries,
    fallbackLocale,
    locale
  })
  {
    this.fallbackLocale = this.buildLocale(fallbackLocale)

    if(locale)
      this.locale = this.buildLocale(locale)

    this.dictionaries   = dictionaries
  }

  buildLocale({
    locale,
    options :
    {
      script,
      region,
      hourCycle,
      calendar
    } = {}
  })
  {
    return new Intl.Locale(locale, {
      script,
      region,
      hourCycle,
      calendar
    })
  }

  getLocale()
  {
    return this.locale ? this.locale.toString() : this.fallbackLocale.toString()
  }

  getLocaleBaseName()
  {
    return this.locale ? this.locale.baseName : this.fallbackLocale.baseName
  }

  getDictionary(locale)
  {
    return this.dictionaries[locale] || {}
  }

  // addDictionary(name, dictionary)
  // {
  //   this.dictionaries[name] = dictionary
  // }

  // deleteDictionary(name)
  // {
  //   delete this.dictionaries[name]
  // }

  // addWordToDictionary(lang, key, value)
  // {
  //   if(!this.dictionaries[lang])
  //     this.dictionaries[lang] = {}

  //   this.dictionaries[lang][key] = value
  // }

  translate({
    id,
    plural,
    fields,
    fallback
  })
  {
    const
    locale      = this.getLocaleBaseName(),
    dictionary  = this.getDictionary(locale),
    text        = dictionary[id]

    if(text)
    {
      if(plural)
      {
        if(fields && typeof text[plural] === 'function')
          return text[plural](fields)
        else if(typeof text[plural] === 'string')
          return text[plural]
      }
      else
      {
        if(fields && typeof text === 'function')
          return text(fields)
        else if(typeof text === 'string')
          return text
      }
    }

    return fallback ? fallback : id
  }

  formatRelativeTime({
    value,
    unit,
    options :
    {
      localeMatcher,
      numeric,
      style,
      split
    } = this.options.relativeTime
  })
  {
    const rtf = new Intl.RelativeTimeFormat(this.getLocale(), {
      localeMatcher,
      numeric,
      style
    })

    if(split)
      return rtf.formatToParts(value, unit)

    return rtf.format(value, unit)
  }

  formatList({
    list,
    options :
    {
      localeMatcher,
      type,
      style
    } = {}
  })
  {
    const lf = new Intl.ListFormat(this.getLocale(), {
      localeMatcher,
      type,
      style
    })

    return lf.format(list)
  }

  formatNumber({
    number,
    options :
    {
      compactDisplay,
      currency,
      currencyDisplay,
      currencySign,
      localeMatcher,
      notation,
      numberingSystem,
      signDisplay,
      style,
      unit,
      unitDisplay,
      useGrouping,
      minimumIntegerDigits,
      minimumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits
    } = {}
  })
  {
    const nf = new Intl.NumberFormat(this.getLocale(), {
      compactDisplay,
      currency,
      currencyDisplay,
      currencySign,
      localeMatcher,
      notation,
      numberingSystem,
      signDisplay,
      style,
      unit,
      unitDisplay,
      useGrouping,
      minimumIntegerDigits,
      minimumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits
    })

    return nf.format(number)
  }

  formatDate({
    date,
    options :
    {
      dateStyle,
      timeStyle,
      calendar,
      dayPeriod,
      numberingSystem,
      localeMatcher,
      timeZone,
      hour12,
      hourCycle,
      formatMatcher,
      weekday,
      era,
      year,
      month,
      day,
      hour,
      minute,
      second,
      fractionalSecondDigits,
      timeZoneName,
    } = {}
  })
  {
    const dtf = new Intl.DateTimeFormat(this.getLocale(),
    {
      dateStyle,
      timeStyle,
      calendar,
      dayPeriod,
      numberingSystem,
      localeMatcher,
      timeZone,
      hour12,
      hourCycle,
      formatMatcher,
      weekday,
      era,
      year,
      month,
      day,
      hour,
      minute,
      second,
      fractionalSecondDigits,
      timeZoneName,
    })

    return dtf.format(date)
  }

  getPluralRules({
    number,
    options :
    {
      localeMatcher,
      type,
      minimumIntegerDigits,
      minimumFractionDigits,
      maximumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits
    }
  })
  {
    const pr = new Intl.PluralRules(this.getLocale(), {
      localeMatcher,
      type,
      minimumIntegerDigits,
      minimumFractionDigits,
      maximumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits
    })

    return pr.select(number)
  }
}


module.exports = Internationalization
