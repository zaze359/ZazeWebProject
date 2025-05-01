// function Pet() {
// 	this.speak = function s(word) {
// 		console.log(word);
// 		var service = require('_http_server');
// 		console.log(service);
// 	};
// 	console.log(this);
// }

// function Dog() {
// 	Pet.call(this);
// }


// var d = new Dog();

// d.speak('aasdasa');





const foo = require('./foo.js');

// const view = new foo.View();
console.log(new foo.view());

// foo.View();
// foo.View.speak("aaa");
// console.log(foo.View.speak);