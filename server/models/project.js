// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var projectSchema = new Schema({
  name: String
  // username: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  // admin: Boolean,
  // location: String,
  // meta: {
  //   age: Number,
  //   website: String
  // },
  // created_at: Date,
  // updated_at: Date
});

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users
// projectSchema.methods.dudify = function() {
//   // add some stuff to the users name
//   this.name = this.name + '-dude';

//   return this.name;
// };

// the schema is useless so far
// we need to create a model using it
var Project = mongoose.model('Project', projectSchema);
//-------------------------------

// var hiro = new User({
//   name: "Hiro",
//   age: 23
// });

// hiro.save(function(err, user){
//   if(err){
//     console.log("error");
//   } else {
//     console.log("saved a user to db");
//     console.log(user);
//   }
// });
Project.create({
  name: "MEAN app"
}, function(err, project){
  if(err){
    console.log(err);
  } else {
    console.log(project);
  }
});

Project.find({}, function(err, projects){
  if(err){
    console.log("error");
    console.log(err);
  } else {
    console.log(projects);
  }
});


// make this available to our users in our Node applications
module.exports = Project;
