module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'add.node' : 'test/action/add-node'
      }
    },
    locator :
    {
      'test/action/add-node' : `${__dirname}/action/add-node`
    }
  }
}
