function myForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
   
    // Reset error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    
    // Validate name
    if (name.trim() === "") {
        nameError.innerHTML = "Name is required";
        document.getElementById('name').focus();
        return false;
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        nameError.innerHTML = "Name should only contain letters";
        document.getElementById('name').focus();
        return false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Invalid email address";
        document.getElementById('email').focus();
        return false;
    }

    return true;
}

