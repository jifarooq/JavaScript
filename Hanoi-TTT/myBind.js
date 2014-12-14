Function.prototype.myBind = function (context) {
  var funct = this;
  var parentArgs = Array.prototype.slice.call(arguments, 1);
  
  return (function () {
    // this == window
    var childArgs = Array.prototype.slice.call(arguments)
    return funct.apply(context, parentArgs.concat(childArgs));
  });
}

var Cat = function (name, age) {
  this.name = name;
  this.age = age;
};

meow = function () {
  return this.name + " says meow!";
};

var cat = new Cat('Gizmo', 3);

boundMeow = meow.myBind(cat);
// console.log(boundMeow());

setTimeout(console.log(meow.myBind(cat)()), 1000);
