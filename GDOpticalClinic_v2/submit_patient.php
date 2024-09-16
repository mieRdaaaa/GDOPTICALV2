<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gdoptical_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array(
        'status' => 'error',
        'message' => 'Connection failed: ' . $conn->connect_error
    )));
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO patients (first_name, last_name, middle_name, address, medication_history, date_of_birth, gender, contact_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $first_name, $last_name, $middle_name, $address, $medication_history, $date_of_birth, $gender, $contact_no);

// Set parameters and execute
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$middle_name = $_POST['middle_name'];
$address = $_POST['address'];
$medication_history = $_POST['medication_history'];
$date_of_birth = $_POST['date_of_birth'];
$gender = $_POST['gender'];
$contact_no = $_POST['contact_no'];

if ($stmt->execute()) {
    $response = array(
        'status' => 'success',
        'message' => 'Patient added successfully'
    );
} else {
    $response = array(
        'status' => 'error',
        'message' => 'Error inserting patient: ' . $stmt->error
    );
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>
