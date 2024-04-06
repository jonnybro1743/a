<?php 
session_start();
if (isset($_SESSION['id']) && isset($_SESSION['email'])) {
    include 'db_conn.php';
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Streaming Profile</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/nav&popup.css">
    <link rel="stylesheet" href="css/profilesetting.css">
</head>
<body>
 
    <ul class="nav-container">
        <li>MOVIEFLIX</li>
        <li><a href="home.html">HOME</a></li>
        <li><a href="genre.html">GENRES</a></li>
        <li><a href="about.html">ABOUT US</a></li>
       <div class="rightnav">
  
   <input type="text" class="searchInput" id="searchInput" placeholder="search" onkeypress="searchMovies()">
        
          <button onclick="profilesetting.html">
         <a href="profilesetting.html">
          <img src="../image/profile.png" id="pp" >
         </a>
          </button>
        </div>      
        
        
      </ul>
      <?php if (isset($_GET['error'])) { ?>
                    <p class="error"><?php echo $_GET['error']; ?></p>
                <?php } ?>

                <?php if (isset($_GET['success'])) { ?>
                    <p class="success"><?php echo $_GET['success']; ?></p>
                <?php } ?>
    <div class="profile-container">
        <div class="tabs">
            <div class="tab" onclick="showTab('profile')">Account</div>
            <div class="tab" onclick="showTab('Password')">Password</div> 
            <div class="tab" onclick="showTab('Deleteaccount')">Delete account </div>
            <div class="tab" onclick="showTab('settings')">Settings</div>
        </div>
        <div class="tab-content" id="profile">
            <h2>Profile Information</h2>
       <div class="info">
       <?php
echo('<h4>Email </h4>
<br>');
          echo $_SESSION['email'];
          echo'  <br>';
          echo('<br>
          <h4>Password  </h4>
          ');
        echo'  <br>';
         echo  $_SESSION['password'];
          ?>
       </div>
            <!-- Add more profile information as needed -->
        </div>
        <div class="tab-content" id="Password" style="display: none;">
        <h2>Change Password</h2>        
            <form action="profilesetting.php" method="post">
   
            
<div class="formpass">
    
<label>Old Password</label>
<br>
                <input type="password" 
                       name="op" 
                       placeholder="Old Password">
                <br>

                <label>New Password</label>                <label style='text-align:right;'>           Confirm New Password</label>
                <br>
                <input type="password" 
                       name="np" 
                       placeholder="New Password">
                


                
                <input type="password" 
                       name="c_np" 
                       placeholder="Confirm New Password">
                <br>

</div>
                <button type="submit">CHANGE</button>
            </form>        
            
        </div>
       
        <div class="tab-content" id="Deleteaccount" style="display: none;">
            <h2>Remove account</h2>
            <form action="delete.php">
          <button class="remove" type='submit'>Delete account </button>
        </form>
        </div>
        <div class="tab-content" id="settings" style="display: none;">
            <h2>Account Settings</h2>
           <br> <p onclick="showTab('profile')">Profile information</p>
           <br> <p onclick="showTab('Password')">Password settings </p>
            <!-- Add more settings options as needed -->
            <br><p onclick="showTab('Deleteaccount')">Delete account </p>
        </div>
    </div>
    <button id="btn">Sign Out</button>
    <script src="js/account.js"></script>
    <script>
        function showTab(tabName) {
            var tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(function (tab) {
                tab.style.display = 'none';
            });

            document.getElementById(tabName).style.display = 'block';
        }
        let signoutbtn=document.getElementById("btn");
        signoutbtn.addEventListener("click",function(){
            window.location.href="logout.php";

        });
        //console.log(pin);
    </script>

</body>
</html>
<?php
} else {
    header("Location: index.php");
    exit();
}
?>
