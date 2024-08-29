<?php
include('doctor_homepage.php');
include('db.php');

$search = "";
if (isset($_GET['search'])) {
    $search = $_GET['search'];
}

// Fetch data with search filter
$sql = "SELECT patients_id, last_name, first_name, middle_name, gender, date_of_birth, contact_no, date_added FROM patients 
        WHERE last_name LIKE '%$search%' 
        OR first_name LIKE '%$search%' 
        OR middle_name LIKE '%$search%'       
        OR contact_no LIKE '%$search%'
        OR date_added LIKE '%$search%'";

$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Table</title>
    <link rel="stylesheet" href="css/doctor_table.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <form method="GET" action="">
        <input type="text" name="search" placeholder=" . . . ." value="<?php echo htmlspecialchars($search); ?>">
        <button type="submit"><i class="fa fa-search"></i> Search</button>
    </form>
    <table>
        <thead>
            <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Contact Number</th>
                <th>Date Added</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                // Output data of each row
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>{$row['last_name']}</td>
                            <td>{$row['first_name']}</td>
                            <td>{$row['middle_name']}</td>
                            <td>{$row['gender']}</td>
                            <td>{$row['date_of_birth']}</td>
                            <td>{$row['contact_no']}</td>
                            <td>{$row['date_added']}</td>
                            <td>
                                <a href='doctor_history_result.php?id={$row['patients_id']}' class='action-btn view'><i class='fa fa-eye'></i></a>
                                
                          </tr>";
                }
            } else {
                echo "<tr><td colspan='8'>No records found</td></tr>";
            }
            $conn->close();
            ?>
        </tbody>
    </table>
</body>
</html>
