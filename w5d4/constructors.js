var Cat = function (name, owner) {
	this.name = name;
	this.owner = owner;

	//not how you do it!
	// var cuteStatement = function () {

}

Cat.prototype.cuteStatement = function () {
		return this.owner + " loves " + this.name;
	};

var myCat = new Cat ('Snowball', 'Billy');
var cat2 = new Cat ('Scruffy', 'Joe');

Cat.prototype.cuteStatement = function () {
	return "Everyone loves " + this.name;
};

Cat.prototype.meow = function () {
	return this.name + " purrs!";
};

cat2.meow = function () {
	return this.name + " has its own meow method!";
};

console.log(myCat.meow() );
console.log(cat2.meow() );