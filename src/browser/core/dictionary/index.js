class Dictionary
{
  constructor(localStorage, fallbackLang, dictionaries)
  {
    this.fallbackLang = fallbackLang
    this.dictionaries = dictionaries
    this.localStorage = localStorage

    this.loadLangFromLocalStorage()
  }

  loadLangFromLocalStorage()
  {
    const lang = this.localStorage.getItem('LANG')

    if(lang)
      this.setLang(lang)
  }

  setLang(lang)
  {
    this.lang = lang
  }

  getLang()
  {
    return this.lang ? this.lang : this.fallbackLang
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
    lang        = this.getLang(),
    dictionary  = this.getDictionary(lang)

    if(dictionary && dictionary[key])
      return dictionary[key]

    return key
  }
}

module.exports = Dictionary
