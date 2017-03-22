var mongoose = require('mongoose');
var db = require('../config');

var UserSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String}
});

var Users = mongoose.model('Users', UserSchema);

module.exports = {
  resetModel: function(cb) {
    Users.remove({}, function(error, result) { 
      if (error) {
        console.error('Error resetting the Users model:', error);
      } else {
        cb(result);
      }
    });
  },
  findById: function(id, callback) {
    console.log('in findById - TO IMPLEMENT! id:', id);
    callback();
  },
  findOne: function(id, callback) {
    console.log('in findOne - TO IMPLEMENT! ID:', id);
    Users.findOne({username: id}, function(err, userDoc) {
      if (err) {
        return console.error(err);
      }
      console.log('findOne results', userDoc);
      callback(userDoc);
    });
  },
  addUser: function(newUser, callback) {
    let user = new Users(newUser);
    console.log(user);
    user.save(function (err, result) {
      if (err) {
        return console.error(err);
      } else {
        callback(result);
      }
    });
  }
};
let callback = (result) => console.log(result);
// module.exports.resetModel((result) => result);
// module.exports.addUser({username: 'JG', password: 'bluejay'}, callback);
module.exports.findOne('Jeff', callback);
