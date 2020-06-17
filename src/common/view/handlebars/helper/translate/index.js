class CoreHandlebarsHelperTranslate
{
  constructor(dictionary)
  {
    this.dictionary = dictionary
  }

  create()
  {
    const dictionary = this.dictionary
    return function(key)
    {
      return dictionary.translate(key)
    }
  }
}

module.exports = CoreHandlebarsHelperTranslate
