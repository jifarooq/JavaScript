
function Clock () {
  this.currentTime = new Date();
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  var hours = this.currentTime.getHours();
  var minutes = this.currentTime.getMinutes();
  var seconds = this.currentTime.getSeconds();
  var timeFormat = hours + ":" + minutes + ":" + seconds;
  console.log(timeFormat)
};

Clock.prototype.run = function () {
  
  setInterval(function () {
    this.printTime();
    this._tick();
  }.bind(this), Clock.TICK)
  
};

Clock.prototype._tick = function () {
  this.currentTime.setSeconds(this.currentTime.getSeconds() + (Clock.TICK / 1000));
};

var clock = new Clock();
clock.run();

