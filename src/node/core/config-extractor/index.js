class ConfigExtractor
{
  constructor(fs)
  {
    this.fs = fs
  }

  async configToFile(path, name)
  {
    const
    configuration = this.locate('core/configuration'),
    config        = configuration.config

    return new Promise((resolve, reject) =>
    {
      this.fs.writeFile(`${path}/${name}`, `module.exports = ${JSON.stringify(config)}`, (error) =>
      {
        if(error)
          reject(error)

        resolve()
      })
    })
  }
}

module.exports = ConfigExtractor
