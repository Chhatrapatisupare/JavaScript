let form = document.getElementById("gymForm");

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");


// Name validation
name.addEventListener("input", function() {

    if (name.value == "") {
        document.getElementById("nameError").innerText =
            "Please enter your name";
    } else {
        document.getElementById("nameError").innerText = "";
    }

});


// Email validation
email.addEventListener("input", function() {

    if (!email.value.includes("@")) {
        document.getElementById("emailError").innerText =
            "Please enter a valid email";
    } else {
        document.getElementById("emailError").innerText = "";
    }

});


// Phone validation
phone.addEventListener("input", function() {

    if (phone.value.length != 10) {
        document.getElementById("phoneError").innerText =
            "Enter 10 digit phone number";
    } else {
        document.getElementById("phoneError").innerText = "";
    }

});


// Age validation
age.addEventListener("input", function() {

    if (age.value < 18) {
        document.getElementById("ageError").innerText =
            "Age must be 18 or above";
    } else {
        document.getElementById("ageError").innerText = "";
    }

});


// Form submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (
        name.value != "" &&
        email.value.includes("@") &&
        phone.value.length == 10 &&
        age.value >= 18
    ) {

        document.getElementById("message").innerText =
            "✓ Admission Successful!";

    } else {

        document.getElementById("message").innerText =
            "Please correct the errors.";

    }

});