<?php
session_start();
include 'db.php';

$user_fullname = '';
$user_role = '';
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $sql = "SELECT fullname, account_type FROM accounts WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $user_fullname = $row['fullname'];
        $user_role = $row['account_type'];
    }
} else {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <script src="https://kit.fontawesome.com/bba3432f3f.js" crossorigin="anonymous"></script>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
    <link rel="shortcut icon" href="images/ico.png" />
    <title>GD OPTICAL CLINIC</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
  <div class="user-info">
            <img src="images/user-icon.png" alt="User Icon" class="user-icon">
            <div class="user-details">
                <span class="name"><?php echo $user_fullname; ?></span>
                <span class="role"><?php echo ucfirst($user_role); ?></span>
            </div>
        </div>
        
    <nav class="navbar">
      <div class="logo-container">
          <img src="images/logo.png" alt="Logo">  
      </div>
  
      <div class="text-container">
          <h2 class="text"><span class="highlight">GD</span> <span class="white-text">OPTICAL CLINIC</span></h2>
      </div>
      
     </nav>

     <nav class="sidebar">
      <div class="menu_content">
        <ul class="menu_items">
         
          <li class="item">
            <a href="doctor_dashboard.php" class="nav_link submenu_item">
              <span class="navlink_icon">
                <i class='bx bxs-dashboard'></i>
              </span>
              <span class="navlink">DASHBOARD</span>
            </a>
          </li>
          
          <li class="item">
            <a href="doctor_table.php" class="nav_link submenu_item">
              <span class="navlink_icon">
                <i class='bx bx-table' ></i>
              </span>
              <span class="navlink">PATIENTS TABLE</span>
            </a>
          </li>
          
          <li class="item">
            <a href="doctor_certificate.php" class="nav_link submenu_item">
              <span class="navlink_icon">
                <i class='bx bx-news' ></i>
              </span>
              <span class="navlink">CERTIFICATE</span>
            </a>
          </li>

          <li class="item">
            <a href="doctor_history.php" class="nav_link submenu_item">
              <span class="navlink_icon">
                <i class='bx bx-history' ></i>
              </span>
              <span class="navlink">HISTORY</span>
            </a>
          </li>
          <li class="item">
            <a href="add_user_secretary.php" class="nav_link submenu_item">
              <span class="navlink_icon">
                <i class='bx bxs-user-plus' ></i>
              </span>
              <span class="navlink">ADD USER</span>
            </a>
          </li>
          <li class="item">
            <a href="doctor_users.php" class="nav_link submenu_item">
              <span class="navlink_icon">
                <i class='bx bxs-user-account' ></i>
              </span>
              <span class="navlink">VIEW USER</span>
            </a>
          </li>
          <li class="item">
            <a href="gdopticalclinic.php" class="nav_link submenu_item">
              <span class="navlink_icon">
              <i class='bx bx-log-out' ></i>
              </span>
              <span class="navlink">LOGOUT</span>
            </a>
          </li>
          
    </nav>

    <script src="js/script.js"></script>
  </body>
</html>
