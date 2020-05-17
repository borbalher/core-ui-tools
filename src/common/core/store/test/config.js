module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'entity/comment' : `${__dirname}/schema/entity/comment`
      }
    },
    reducer :
    {
      actions :
      {
        'add.comment' : 'test/action/add-comment'
      }
    },
    locator :
    {
      'test/action/add-comment' : `${__dirname}/action/add-comment`
    }
  }
}
