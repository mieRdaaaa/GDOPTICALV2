<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    include_once "db.php";

    $fullname = $_POST["fullname"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $contact_number = $_POST["contact_number"];
    $birthdate = $_POST["birthdate"];
    $gender = $_POST["gender"];
    $account_type = $_POST["role"];

    // Capture address fields
    $region = $_POST["region"];
    $province = $_POST["province"];
    $city = $_POST["city"];
    $barangay = $_POST["barangay"];

    
    // Combine address into a single string
    $address = "$barangay, $city, $province, $region";  // Concatenating the address string

    $sql = "INSERT INTO accounts (username, password, fullname, gender, birthdate, address, contact_number, account_type) 
            VALUES ('$username', '$password', '$fullname', '$gender', '$birthdate', '$address', '$contact_number', '$account_type')";

    if (mysqli_query($conn, $sql)) {
        $success_message = "User added successfully.";
    } else {
        $error_message = "Error: " . mysqli_error($conn);
    }

    mysqli_close($conn);

    header("Location: add_user_secretary.php?success_message=" . urlencode($success_message) . "&error_message=" . urlencode($error_message));
    exit();
}
