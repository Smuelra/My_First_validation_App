<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    
    // Perform server-side validation
    $errors = array();

    if(empty($name)) {
      $errors[] = "Name is required";
   }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }


    if (empty($errors)) {
        // Process the form data (e.g., save to a database)
        echo "Form data successfully submitted!";
    } else {
        // Output validation errors
        if (!empty($errors)) {
            echo  "<script>alert ('".implode("\\n", $errors). "');</script>";
       
    }
}
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
