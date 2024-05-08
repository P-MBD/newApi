const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const User = Schema(
    {
        phone : { type : String, required : true},
        password : { type : String, required : true},
  },{
    timestamps: true,
  }
)
User.statics.CreateToken = async(id, secretId, exp) => {
  return await jwt.sign({id} , secretId , {expiresIn: exp});
}
module.exports = mongoose.model('User', User)