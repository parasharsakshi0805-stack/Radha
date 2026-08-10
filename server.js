const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("."));

app.post("/register", (req, res) => {

    try {

        const student = req.body;

        const data = JSON.parse(
            fs.readFileSync("student.json", "utf8")
        );

        data.students.push(student);

        fs.writeFileSync(
            "student.json",
            JSON.stringify(data, null, 2)
        );

        res.json({
            message: "Registration Successful!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Registration Failed!"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});