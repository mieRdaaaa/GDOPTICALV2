<?php

include('doctor_homepage.php');
include('db.php');



// Get the patient's ID from the query string
$patient_id = intval($_GET['id'] ?? 0);

// Validate the patient_id
if ($patient_id <= 0) {
    die("Invalid patient ID.");
}

// Check if the patient exists
$check_patient_sql = "SELECT * FROM patients WHERE patients_id = ?";
$stmt = $conn->prepare($check_patient_sql);
$stmt->bind_param("i", $patient_id);
$stmt->execute();
$patient_result = $stmt->get_result();

if ($patient_result->num_rows === 0) {
    die("Patient ID does not exist.");
}

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $r_sphere = $_POST['right_sphere'];
    $l_sphere = $_POST['left_sphere'];
    $r_cylinder = $_POST['right_cylinder'];
    $l_cylinder = $_POST['left_cylinder'];
    $r_axis = $_POST['right_axis'];
    $l_axis = $_POST['left_axis'];
    $pd = $_POST['pupillary_distance'];

    // Prepare the SQL statement to insert the data into the database
    $sql = "INSERT INTO eye_result
            (r_sphere, l_sphere, r_cylinder, l_cylinder, r_axis, l_axis, pd, patients_id) 
            VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("dddddddi", $r_sphere, $l_sphere, $r_cylinder, $l_cylinder, $r_axis, $l_axis, $pd, $patient_id);

    // Execute the query and check if the insertion was successful
    if ($stmt->execute()) {
        // Redirect to the desired page after submission
        header("Location: doctor_table.php");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and database connection
    $stmt->close();
    $conn->close();
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Patient</title>
    <link rel="stylesheet" href="css/doctor_eyeresult.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">  
</head>
<body>
<div class="container">
    <h2>Eye Examination Form</h2>
    <form method="POST" action="">
        <div class="form-group">
            <label for="right_sphere"><i class=" fa fa-eye"></i>Right Sphere:</label>
            <input type="number" step="0.01" id="right_sphere" name="right_sphere" required>
        </div>
        <div class="form-group">
            <label for="left_sphere"><i class=" fa fa-eye"></i>Left Sphere:</label>
            <input type="number" step="0.01" id="left_sphere" name="left_sphere" required>
        </div>
        <div class="form-group">
            <label for="right_cylinder"><i class=" fa fa-eye"></i>Right Cylinder:</label>
            <input type="number" step="0.01" id="right_cylinder" name="right_cylinder" required>
        </div>
        <div class="form-group">
            <label for="left_cylinder"><i class=" fa fa-eye"></i>Left Cylinder:</label>
            <input type="number" step="0.01" id="left_cylinder" name="left_cylinder" required>
        </div>
        <div class="form-group">
            <label for="right_axis"><i class=" fa fa-eye"></i>Right Axis:</label>
            <input type="number" step="0.01" id="right_axis" name="right_axis" required>
        </div>
        <div class="form-group">
            <label for="left_axis"><i class=" fa fa-eye"></i>Left Axis:</label>
            <input type="number" step="0.01" id="left_axis" name="left_axis" required>
        </div>
        <div class="form-group">
            <label for="pupillary_distance"><i class=" fa fa-eye"></i>Pupillary Distance:</label>
            <input type="number" step="0.01" id="pupillary_distance" name="pupillary_distance" required>
        </div>

        <div class="action-buttons">
        <a href='doctor_table.php'><button type="submit" class="submit-button" onclick="alert('New eye record added')"><i class="fas fa-check"></i> Submit</button></a>
        <button type="button" class="cancel" onclick="window.location.href='doctor_table.php';"><i class="fas fa-times"></i> Cancel</button></form>
        </div>

</body>
</html>

</body>