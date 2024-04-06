<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "account";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name']; // Update to match your actual form field name
    // $subscriptionPlan = $_POST['subscriptionPlan'];
    $dob = $_POST['dob'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO information (name, dob, email, password)
            VALUES ('$name', '$dob', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        header('location:index.php?message=Account created successfully');
    } else {
        header('location:index.php?error=error'); 
    }

    $conn->close();
}
?>
