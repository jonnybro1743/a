<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/sign-up.css">
    <title>Sign Up Page</title>
</head>
<body>
    <form action="signup.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
   
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required>
    
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required>
    
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    
        <button type="submit">Sign Up</button>
    </form>
</body>
</html>
