const querystring = require('querystring');

var obj = {name: "一介布衣", url: "http://yijiebuyi.com"};

//没有指定分隔符和分配符,并且自动编码汉字
let param = querystring.stringify(obj);
console.log(param);

//指定了分隔符和分配符
param = querystring.stringify(obj, '|', '*');
console.log(param);

// 参数字符串格式化成对象
var newobj = querystring.parse(param);
console.log(typeof newobj  , newobj);



// 参数编码 :escape
// 参数解码 :querystring.unescape
param="一介布衣&http://yijiebuyi.com";
console.log(querystring.escape(param));
console.log(querystring.unescape(querystring.escape(param)));
