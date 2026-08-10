document.getElementById("registrationForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;

    let gender = "";
    let genders = document.getElementsByName("gender");

    for (let g of genders) {
        if (g.checked) {
            gender = g.value;
        }
    }

    let student = {
        name: name,
        email: email,
        mobile: phone,
        branch: course,
        gender: gender,
        password: password
    };

    try {

        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();

        document.getElementById("message").innerHTML = result.message;

        if (response.ok) {
            document.getElementById("registrationForm").reset();
        }

    } catch (error) {
        console.error(error);

        document.getElementById("message").innerHTML =
            "Registration failed!";
    }
});