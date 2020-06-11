var events = require("events");

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("Listener 1 is executed")
};

eventEmitter.on("connection", listener1);

var listner2 = function listener2(){
    console.log("Listener 2 is executed");
}

eventEmitter.addListener("connection", listner2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");

console.log(eventListeners + "listeners listening to connection event");

eventEmitter.emit("connection");

eventEmitter.removeListener("connection", listener1);
console.log("listener 1 will not listen now");

eventEmitter.emit("connection");

eventListeners = eventEmitter.listenerCount("connection");
console.log(eventListeners + "listeners are listening to the connection event");

console.log("Program Ended");


