<?php 
session_start(); 
include 'db_conn.php';

if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    if (empty($email)) {
        header("Location: index.php?error=Username is required");
        exit();
    } elseif (empty($pass)) {
        header("Location: index.php?error=Password is required");
        exit();
    } else {
        // Hashing the password
        //$pass = md5($pass);
        
        // SQL query (use prepared statements to prevent SQL injection)
       $sql="SELECT * FROM information WHERE email = '$email' AND password = '$pass'";
       $result = mysqli_query($conn, $sql);
       
        if ($result->num_rows === 1) {
            $row = $result->fetch_assoc();
            if ($row['email'] === $email && $row['password'] === $pass) {
                $_SESSION['email'] = $row['email'];
                $_SESSION['password'] = $row['password'];
                $_SESSION['id'] = $row['id']; 
                header("Location: home.html");
                exit();
            } else {
                header("Location: index.php?error=Incorrect username or password");
                exit();
            }
        } else {
            header("Location: index.php?error=Incorrect username or password");
            exit();
        }
    }
} else {
    header("Location: index.php");
    exit();
}
?>
