const http = require('http');
const url = 'http://www.baidu.com';

http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
        console.log(html);
    });
});
