var util = require("util");

var Animal =function () {

};

Animal.prototype.message = "qwert";

Animal.prototype.say = function () {
  console.log(this.message);
};

var Dog = function () {
  Animal.call(this);
  this.message = "わんわん";
};
util.inherits(Dog, Animal);


var dog = new Dog();
dog.say();