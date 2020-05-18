class DeepMerge
{
  merge(a, b, ...c)
  {
    const result = this._merge(a, b)

    return c.length ? this.merge(result, c[0], ...c.slice(1)) : result
  }

  _merge(a, b)
  {
    if(typeof a !== 'object' || a === null)
      return b

    return Array.isArray(a) ? this._mergeArray(a, b) : this._mergeObject(a, b)
  }

  _mergeArray(a, b)
  {
    if(!Array.isArray(b))
      return b

    // let merged = [...a, ...b]
    // const uniques = merged.filter((item, index) => merged.indexOf(item) === index)
    // return uniques
    return [...a, ...b]
  }

  _mergeObject(a, b)
  {
    const output = { ...a }
    for(const key in b)
      output[key] = key in output ? this._merge(output[key], b[key]) : b[key]

    return output
  }
}

module.exports = DeepMerge
