<?php
session_start();
include 'db.php';

$showWarning = false; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $stmt = $conn->prepare("SELECT * FROM accounts WHERE username=? AND password=?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $_SESSION['username'] = $row['username'];
        $_SESSION['fullname'] = $row['fullname'];
        $_SESSION['role'] = $row['account_type'];

        if ($row['account_type'] == 'doctor') {
            header("Location: doctor_dashboard.php");
        } else if ($row['account_type'] == 'secretary') {
            header("Location: secretary_dashboard.php");
        }
        exit();
    } else {
        $showWarning = true;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login ┃ GD Optical Clinic</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="shortcut icon" href="images/ico.png" />
</head>
<body>
    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <img src="images/mainlogo.png" alt="Your Logo" class="logo">
        <h3>LOG IN</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" id="username" name="username" required>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" id="password" name="password" required>
         <?php

        if ($showWarning) {
            echo "<p style='color: red;'>Invalid username or password. Please try again.</p>";
        }
        ?>
        <button type="submit">Log In</button>
    </form>
</body>
</html>
