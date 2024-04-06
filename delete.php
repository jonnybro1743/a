<?php
session_start();

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "account";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


if (isset($_SESSION['email']) && isset($_SESSION['password'])) {
    $email = $_SESSION['email'];
    $password = $_SESSION['password'];

    $sql = "DELETE FROM information WHERE email = '$email' AND password = '$password'";
    if (mysqli_query($conn, $sql)) {
        // Deletion successful, destroy the session
        session_destroy();
        header("Location: index.php?message=Account deleted successfully");
        exit();
    } else {
        // Error occurred during deletion
        header("Location: index.php?error=Error deleting account");
        exit();
    }
} else {
    // Session variables not set, redirect to index.php
    header("Location: index.php?error=Session variables not set");
    exit();
}

?>
