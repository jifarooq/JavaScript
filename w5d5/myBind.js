Function.prototype.myBind = function (context) {
  var funct = this;
  var parentArgs = Array.prototype.slice.call(arguments, 1);
  
  return (function () {
    // this == window
    var childArgs = Array.prototype.slice.call(arguments)
    return funct.apply(context, parentArgs.concat(childArgs));
  })()
}

var Cat = function (name, age) {
  this.name = name;
  this.age = age;
};

meow = function () {
  console.log(this.name + " says meow!");
};

var cat = new Cat('Gizmo', 3);
cat.meow();

boundMeow = meow.myBind(cat);
boundMeow();

// setTimeout(myBind(cat, cat.meow), 1000);
