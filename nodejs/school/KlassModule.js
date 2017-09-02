var studentModule = require('./StudentModule.js');
var teacherModule = require('./TeacherModule.js');

function add(teacherName, studentName) {
    teacherModule.addTea(teacherName);
    studentModule.addStu(studentName);
}

function addArray(teacherName, studentNames) {
    teacherModule.addTea(teacherName);
    studentNames.forEach(function (name) {
        studentModule.addStu(name);
    })
}
exports.add = add;
exports.addArray = addArray;
