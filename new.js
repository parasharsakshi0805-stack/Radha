document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    let gender = "";
    let genders = document.getElementsByName("gender");

    for(let g of genders){
        if(g.checked){
            gender = g.value;
        }
    }

    let student = {
        name:name,
        email:email,
        phone:phone,
        course:course,
        gender:gender
    };

    console.log(student);

    document.getElementById("message").innerHTML =
    "Registration Successful!";

    document.getElementById("registrationForm").reset();
});