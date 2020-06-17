class Dictionary
{
  constructor(fallbackLang, dictionaries, store)
  {
    this.fallbackLang = fallbackLang
    this.dictionaries = dictionaries
    this.store        = store
  }

  getDictionary(lang)
  {
    return this.dictionaries[lang]
  }

  addDictionary(name, dictionary)
  {
    this.dictionaries[name] = dictionary
  }

  deleteDictionary(name)
  {
    delete this.dictionaries[name]
  }

  addWordToDictionary(lang, key, value)
  {
    if(!this.dictionaries[lang])
      this.dictionaries[lang] = {}

    this.dictionaries[lang][key] = value
  }

  translate(key)
  {
    const
    {
      domain :
      {
        lang = this.fallbackLang
      }
    }           = this.getState(),
    dictionary  = this.getDictionary(lang)

    if(dictionary && dictionary[key])
      return dictionary[key]

    return key
  }
}

module.exports = Dictionary
