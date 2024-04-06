
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link rel="stylesheet" href="css/signin.css">
    <title>Connect IPs</title>
    <style>
        /* Your styles here */
    </style>
</head>
<body>
    
    <div class="content">
        <form action="signin.php" method="post">
            <h1 class="h1">Login</h1>
            <?php if (isset($_GET['error'])) { ?>
                <p class="error"><?php echo $_GET['error']; ?></p>
            <?php } ?>
            <?php if (isset($_GET['message'])) { ?>
                <p class="message"><?php echo $_GET['message']; ?></p>
            <?php } ?>
            <div>
                <input type="text" name="email" class="email" placeholder="Email">
            </div>
            <div>
                <input type="password" name="password" class="password" placeholder="Password">
            </div>
            <a href="#" class="forgot">Forgot Username?</a>
            <div>
                <button type="submit" class="continue">Continue</button>
            </div>
        </form>
        <div class="newaccount">Don't have an account yet? 
            <a class="a" href="signuphtml.php">Create one</a>
        </div>
    </div>
</body>
</html>
