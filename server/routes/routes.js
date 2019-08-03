var User = require('../models/project');

module.exports = function(app) {
  //api-----------------------
  app.get('/', function(req, res) {
    res.sendFile(__dirname + '')

  });
  // app.get('/contact', function(req, res) {
  //   res.sendFile(__dirname + '')

  // });

  // // create todo and send back all todos after creation
  // app.post('/api/todos', function(req, res) {



  // });

  // // delete a todo
  // app.delete('/api/todos/:todo_id', function(req, res) {



  // });
  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
    res.sendfile('./src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}
