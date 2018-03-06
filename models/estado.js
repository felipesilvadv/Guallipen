var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var estadoSchema = new mongoose.Schema({
  id:Number,
  nombre:String
}, {timestamps: true});

module.exports = restful.model('Estados',estadoSchema);
