const fs = require("fs");

let passed = true;

console.log("Registration Test\n");

// TC01: Check new.html
if (fs.existsSync("hello.html")) {
    console.log("TC01: new.html exists: PASS");
} else {
    console.log("TC01: new.html exists: FAIL");
    passed = false;
}

// TC02: Check new.css
if (fs.existsSync("new.css")) {
    console.log("TC02: new.css exists: PASS");
} else {
    console.log("TC02: new.css exists: FAIL");
    passed = false;
}

// TC03: Check new.js
if (fs.existsSync("new.js")) {
    console.log("TC03: new.js exists: PASS");
} else {
    console.log("TC03: new.js exists: FAIL");
    passed = false;
}

// TC04: Check student.json
if (fs.existsSync("student.json")) {
    console.log("TC04: student.json exists: PASS");
} else {
    console.log("TC04: student.json exists: FAIL");
    passed = false;
}

// Read student data
const data = JSON.parse(fs.readFileSync("student.json", "utf8"));
const student = data.students[0];

// TC05: Name validation
if (student.name && student.name.trim() !== "") {
    console.log("TC05: Name validation: PASS");
} else {
    console.log("TC05: Name validation: FAIL");
    passed = false;
}

// TC06: Email validation
if (student.email && student.email.includes("@")) {
    console.log("TC06: Email validation: PASS");
} else {
    console.log("TC06: Email validation: FAIL");
    passed = false;
}

// TC07: Mobile validation
if (student.mobile && /^\d{10}$/.test(student.mobile)) {
    console.log("TC07: Mobile validation: PASS");
} else {
    console.log("TC07: Mobile validation: FAIL");
    passed = false;
}

// TC08: Branch validation
if (student.branch && student.branch.trim() !== "") {
    console.log("TC08: Branch validation: PASS");
} else {
    console.log("TC08: Branch validation: FAIL");
    passed = false;
}

// TC09: Password validation
if (student.password && student.password.length >= 6) {
    console.log("TC09: Password validation: PASS");
} else {
    console.log("TC09: Password validation: FAIL");
    passed = false;
}

// TC10: Registration successful
if (passed) {
    console.log("TC10: Registration successful: PASS");
    console.log("\nBuild Success");
} else {
    console.log("TC10: Registration successful: FAIL");
    console.log("\nBuild Failed");
    process.exit(1);
}