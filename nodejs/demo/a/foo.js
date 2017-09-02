 // exports.a = function(){
 // console.log('a')
 // }

 // exports.a = 1 

function View(){
  	this.speak = function s(word) {
		console.log(word);
		// var service = require('_http_server');
		// console.log(service);
	};
	console.log('CCCCC');
 }

 View.prototype.test = function(){
  console.log('test')
 };

 View.test1 = function(){
  console.log('test1')
 };


exports.View = View;

// module.exports = {
// 	View
// };