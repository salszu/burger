var connection = require('../config/connection.js');

var orm = {
  
  selectAll: function(table, cb) {
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table + ' (';
    queryString += cols.toString();
    queryString += ') VALUES (?)';
    connection.query(queryString, [vals], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table + ' SET ' + objColVals + ' WHERE ' + condition;
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    var queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;