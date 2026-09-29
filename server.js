
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "new.html"));
});

app.post("/register", (req, res) => {
    try {
        const student = req.body;

        const data = JSON.parse(
            fs.readFileSync(
                path.join(__dirname, "student.json"),
                "utf8"
            )
        );

        data.students.push(student);

        fs.writeFileSync(
            path.join(__dirname, "student.json"),
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

