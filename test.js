const fs = require("fs");
let passed = true;
console.log("Registration Test\n");

//TC01:check new.html
if(fs.existsSync("new.html")){
    console.log("TC01:new.html exists:PASS");
}
else{
    console.log("TC01:new.html exists:FAIL");
    passed = false;
}

//TC02:check new.css
if(fs.existsSync("new.css")){
    console.log("TC01:new.css exists:PASS");
}
else{
    console.log("TC01:new.css exists:FAIL");
    passed = false;
}

//TC03:check new.js
if(fs.existsSync("new.js")){
    console.log("TC01:new.js exists:PASS");
}
else{
    console.log("TC01:new.js exists:FAIL");
    passed = false;
}
//TC04:check student.json
if(fs.existsSync("student.json")){
    console.log("TC04:student.json exists:PASS");
}
else{
    console.log("TC04:student.json exists:FAIL");
    passed = false;
}

const students = JSON.parse(
    fs.readFileSync("data/students.json")
);

const student = student[0];