const EventEmitter = require('events').EventEmitter;
const test = new EventEmitter();


// addEventListener
// 参照Rxjava 来理解
const eventName = 'eventName';

// 设置最大监听数， 默认10
// test.setMaxListeners(11);

function fffa(args) {
    console.log('callback ' + args + " 1");
}

test.on(eventName, fffa).on(eventName, function (args) {
    console.log('callback ' + args + " 2");
});

test.on(eventName, function (args) {
    console.log('callback ' + args + " 3");
});
test.on(eventName, function () {
    console.log('callback 4');
});
test.removeListener(eventName, fffa);
test.emit(eventName, '....');