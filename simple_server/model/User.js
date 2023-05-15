const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  Nome: {
    type: String
  },
  email: {
    type: String
  },
  Senha: {
    type: String
  },
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);