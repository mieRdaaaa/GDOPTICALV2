<?php
include('doctor_homepage.php');
include('db.php');

// Get the user's ID from the query string
$id = intval($_GET['id']);

// Fetch the user's current details from the database
$sql = "SELECT * FROM accounts WHERE accounts_id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
} else {
    echo "No records found";
    exit;
}

// Update the user's details if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $birthdate = $_POST['birthdate'];
    $contact_number = $_POST['contact_number'];
    $account_type = $_POST['account_type'];

    // Corrected SQL UPDATE query
    $update_sql = "UPDATE accounts SET 
                    fullname = '$fullname', 
                    username = '$username', 
                    password = '$password', 
                    gender = '$gender', 
                    address = '$address', 
                    birthdate = '$birthdate',
                    contact_number = '$contact_number',
                    account_type = '$account_type'
                   WHERE accounts_id = $id";

    if ($conn->query($update_sql) === TRUE) {
        // Set a session variable for notification
        session_start();
        $_SESSION['notification'] = 'Record updated successfully';
        header("Location: doctor_users.php?id=$id");
        exit;
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit User</title>
    <link rel="stylesheet" href="css/doctor_usersedit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">  
</head>
<body>
    <div class="container">
        <h2>Edit User Details</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="fullname"><i class="fa fa-user"></i> Full Name:</label>
                <input type="text" id="fullname" name="fullname" value="<?php echo htmlspecialchars($row['fullname']); ?>" required>
            </div>
            <div class="form-group">
                <label for="username"><i class="fa fa-user"></i> Username:</label>
                <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($row['username']); ?>" required>
            </div>
            <div class="form-group">
                <label for="password"><i class="fa fa-lock"></i> Password:</label>
                <input type="text" id="password" name="password" value="<?php echo htmlspecialchars($row['password']); ?>" required>
            </div>
            <div class="form-group">
                <label for="gender"><i class="fa fa-venus-mars"></i> Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="Male" <?php echo ($row['gender'] == 'Male') ? 'selected' : ''; ?>>Male</option>
                    <option value="Female" <?php echo ($row['gender'] == 'Female') ? 'selected' : ''; ?>>Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="birthdate"><i class="fa fa-calendar"></i> Date of Birth:</label>
                <input type="date" id="birthdate" name="birthdate" value="<?php echo htmlspecialchars($row['birthdate']); ?>" required>
            </div>
            <div class="form-group">
                <label for="contact_number"><i class="fa fa-phone"></i> Contact Number:</label>
                <input type="text" id="contact_number" name="contact_number" value="<?php echo htmlspecialchars($row['contact_number']); ?>" required>
            </div>
            <div class="form-group">
                <label for="address"><i class="fa fa-home"></i> Address:</label>
                <input type="text" id="address" name="address" value="<?php echo htmlspecialchars($row['address']); ?>" required>
            </div>
            <div class="form-group">
                <label for="account_type"><i class="fa fa-home"></i> Account Type:</label>
                <input type="text" id="account_type" name="account_type" value="<?php echo htmlspecialchars($row['account_type']); ?>" readonly>
            </div>
            <div class="action-buttons">
                <button type="submit" class="action-btn save-btn"><i class="fa fa-save"></i> Save</button>
                <a href="doctor_users.php?id=<?php echo $row['accounts_id']; ?>" class="action-btn cancel-btn"><i class="fa fa-times"></i> Cancel</a>
            </div>
        </form>
    </div>
</body>
</html>
