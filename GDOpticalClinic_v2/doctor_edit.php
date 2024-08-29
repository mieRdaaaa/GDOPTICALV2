<?php
include('doctor_homepage.php');
include('db.php');

// Get the patient's ID from the query string
$id = intval($_GET['id']);

// Fetch the patient's current details from the database
$sql = "SELECT * FROM patients WHERE patients_id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $original_date_added = $row['date_added']; // Store the original date_added
} else {
    echo "No record found.";
    exit;
}

// Update the patient's details if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $last_name = $_POST['last_name'];
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $gender = $_POST['gender'];
    $date_of_birth = $_POST['date_of_birth'];
    $contact_no = $_POST['contact_no'];
    $medication_history = $_POST['medication_history'];

    // Corrected SQL UPDATE query excluding date_added
    $update_sql = "UPDATE patients SET 
                    last_name = '$last_name', 
                    first_name = '$first_name', 
                    middle_name = '$middle_name', 
                    gender = '$gender', 
                    date_of_birth = '$date_of_birth', 
                    contact_no = '$contact_no',
                    medication_history = '$medication_history',
                    date_added = '$original_date_added'  -- Ensure the original date_added is preserved
                   WHERE patients_id = $id";

    if ($conn->query($update_sql) === TRUE) {
        // Set a session variable for notification
        session_start();
        $_SESSION['notification'] = 'Record updated successfully';
        header("Location: doctor_view.php?id=$id");
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
    <title>Edit Patient</title>
    <link rel="stylesheet" href="css/doctor_edit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">  
   
</head>
<body>
    <div class="container">
        <h2>Edit Patient Details</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="last_name"><i class="fa fa-user"></i> Last Name:</label>
                <input type="text" id="last_name" name="last_name" value="<?php echo htmlspecialchars($row['last_name']); ?>" required>
            </div>
            <div class="form-group">
                <label for="first_name"><i class="fa fa-user"></i> First Name:</label>
                <input type="text" id="first_name" name="first_name" value="<?php echo htmlspecialchars($row['first_name']); ?>" required>
            </div>
            <div class="form-group">
                <label for="middle_name"><i class="fa fa-user"></i> Middle Name:</label>
                <input type="text" id="middle_name" name="middle_name" value="<?php echo htmlspecialchars($row['middle_name']); ?>" required>
            </div>
            <div class="form-group">
                <label for="gender"><i class="fa fa-venus-mars"></i> Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="Male" <?php echo ($row['gender'] == 'Male') ? 'selected' : ''; ?>>Male</option>
                    <option value="Female" <?php echo ($row['gender'] == 'Female') ? 'selected' : ''; ?>>Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="date_of_birth"><i class="fa fa-calendar"></i> Date of Birth:</label>
                <input type="date" id="date_of_birth" name="date_of_birth" value="<?php echo htmlspecialchars($row['date_of_birth']); ?>" required>
            </div>
            <div class="form-group">
            <label for="contact_no"><i class="fa fa-phone"></i> Contact Number:</label>
            <input type="text" id="contact_no" name="contact_no" value="<?php echo htmlspecialchars($row['contact_no']); ?>" 
                pattern="\d{11}" maxlength="11" required title="Contact number must be exactly 11 digits">
              </div>
            <div class="form-group">
                <label for="medication_history"><i class="fa fa-history"></i> Medication History:</label>
                <input type="text" id="medication_history" name="medication_history" value="<?php echo htmlspecialchars($row['medication_history']); ?>" required>
            </div>
            <div class="action-buttons">
                <button type="submit" class="action-btn save-btn" onclick="return alert('Record updated successfuly')"><i class="fa fa-save"></i> Save</button>
                <a href="doctor_view.php?id=<?php echo $row['patients_id']; ?>" class="action-btn cancel-btn"><i class="fa fa-times"></i> Cancel</a>
            </div>
        </form>
    </div>
</body>
</html>
