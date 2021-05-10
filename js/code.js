function validateEmail() {
    var inputEmail = document.getElementById("email").value;
    console.log(inputEmail);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.value.match(mailformat)) {
        alert("Email: Good to go!");
        //return true;
    } else {
        alert("Email: invalid email address!");
        //return false;
    }
}

function checkPassword() {
    var inputPassword = document.getElementById("pswd").value;
    console.log("Working");
    var valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputPassword.value.match(valid)) {
        alert("Password: Good to go!");
        //return true;
    } else {
        alert('Password should be: 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
        //return false;
    }
}