<?php
include('doctor_homepage.php');
include('db.php');

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);

    // Fetch the patient record based on the ID
    $sql = "SELECT * FROM patients WHERE patients_id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $patient = $result->fetch_assoc();
    } else {
        echo "Record not found";
        exit;
    }

    // Fetch all eye results for the patient
    $sql_eye_results = "SELECT * FROM eye_result WHERE patients_id = $id ORDER BY date_added DESC";
    $eye_results_result = $conn->query($sql_eye_results);

    if ($eye_results_result === false) {
        echo "Error fetching eye results";
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
    <link rel="stylesheet" href="css/doctor_history_result.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <h2>Patient Details</h2>
        <table class="details-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Contact Number</th>
                    <th>Medication History</th>
                    <th>Date Added</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><?php echo $patient['patients_id']; ?></td>
                    <td><?php echo $patient['last_name']; ?></td>
                    <td><?php echo $patient['first_name']; ?></td>
                    <td><?php echo $patient['middle_name']; ?></td>
                    <td><?php echo $patient['gender']; ?></td>
                    <td><?php echo $patient['date_of_birth']; ?></td>
                    <td><?php echo $patient['contact_no']; ?></td>
                    <td><?php echo $patient['medication_history']; ?></td>
                    <td><?php echo $patient['date_added']; ?></td>
                </tr>
            </tbody>
        </table>
        
        <h2>Eye Results History</h2>
        <div class="eye-results-container">
            <?php if ($eye_results_result->num_rows > 0): ?>
                <?php while ($eye_row = $eye_results_result->fetch_assoc()): ?>
                    <div class="eye-result-box">
                        <h3>Date Added: <?php echo $eye_row['date_added']; ?></h3>
                        <p><strong>Right Sphere:</strong> <?php echo $eye_row['r_sphere']; ?></p>
                        <p><strong>Left Sphere:</strong> <?php echo $eye_row['l_sphere']; ?></p>
                        <p><strong>Right Axis:</strong> <?php echo $eye_row['r_axis']; ?></p>
                        <p><strong>Left Axis:</strong> <?php echo $eye_row['l_axis']; ?></p>
                        <p><strong>Right Cylinder:</strong> <?php echo $eye_row['r_cylinder']; ?></p>
                        <p><strong>Left Cylinder:</strong> <?php echo $eye_row['l_cylinder']; ?></p>
                        <p><strong>Pupillary Distance:</strong> <?php echo $eye_row['pd']; ?></p>
                        <p><strong>eye result id</strong> <?php echo $eye_row['eye_result_id']; ?></p>
                       
                    </div>
                <?php endwhile; ?>
            <?php else: ?>
                <p>No eye results found</p>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>