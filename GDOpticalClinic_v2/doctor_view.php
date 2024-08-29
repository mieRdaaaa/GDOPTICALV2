<?php
include('doctor_homepage.php');
include('db.php');

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);

    // Fetch the record based on the ID
    $sql = "SELECT * FROM patients WHERE patients_id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
    } else {
        echo "Record not found";
        exit;
    }
} else {
    echo "Invalid request";
    exit;
}



$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Patient Details</title>
    <link rel="stylesheet" href="css/doctor_view.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <h2>Patient Details</h2>
        <div class="details-table">
            <div class="detail-row">
                <span class="detail-title">ID:</span>
                <span class="detail-value"><?php echo $row['patients_id']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">Last Name:</span>
                <span class="detail-value"><?php echo $row['last_name']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">First Name:</span>
                <span class="detail-value"><?php echo $row['first_name']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">Middle Name:</span>
                <span class="detail-value"><?php echo $row['middle_name']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">Gender:</span>
                <span class="detail-value"><?php echo $row['gender']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">Date of Birth:</span>
                <span class="detail-value"><?php echo $row['date_of_birth']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">Contact Number:</span>
                <span class="detail-value"><?php echo $row['contact_no']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">Medication History:</span>
                <span class="detail-value"><?php echo $row['medication_history']; ?></span>
            </div>
            <div class="detail-row">
                <span class="detail-title">Date Added:</span>
                <span class="detail-value"><?php echo $row['date_added']; ?></span>
            </div>
        </div>
        <div class="action-buttons">
            <a href="doctor_edit.php?id=<?php echo $row['patients_id']; ?>" class="action-btn edit-btn"><i class="fa fa-edit"></i>Edit</a>
            <a href="delete.php?id=<?php echo $row['patients_id']; ?>" class="action-btn delete-btn" onclick="return confirm('Are you sure you want to delete this record?')"><i class="fa fa-trash-o"></i>Delete</a>
            <a href="doctor_table.php" class="action-btn back-btn">Back to List</a>
        </div>
    </div>
</body>
</html>


