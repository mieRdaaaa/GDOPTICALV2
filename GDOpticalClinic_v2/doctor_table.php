<?php
include('doctor_homepage.php');
include('db.php');


$search = "";
if (isset($_GET['search'])) {
    $search = $_GET['search'];
}

// Fetch data with search filter
$sql = "SELECT patients_id, last_name, first_name, middle_name, gender, date_of_birth, contact_no, address, date_added FROM patients 
        WHERE last_name LIKE '%$search%' 
        OR first_name LIKE '%$search%' 
        OR middle_name LIKE '%$search%'       
        OR contact_no LIKE '%$search%'
        OR address LIKE '%$search%'
        OR date_added LIKE '%$search%'";


$result = $conn->query($sql);

// Check if delete request is set
if (isset($_GET['delete_id'])) {
    $delete_id = intval($_GET['delete_id']);
    
    // Start a transaction to ensure data integrity
    $conn->begin_transaction();
    
    try {
        // Delete related records in the eye_result table
        $delete_eye_result_sql = "DELETE FROM eye_result WHERE patients_id = $delete_id";
        if ($conn->query($delete_eye_result_sql) !== TRUE) {
            throw new Exception("Error deleting eye result records: " . $conn->error);
        }
        
        // Delete the patient record
        $delete_patient_sql = "DELETE FROM patients WHERE patients_id = $delete_id";
        if ($conn->query($delete_patient_sql) !== TRUE) {
            throw new Exception("Error deleting patient record: " . $conn->error);
        }
        
        // Commit the transaction
        $conn->commit();
        echo "Record deleted successfully";
        
        // Refresh the page after deletion
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    } catch (Exception $e) {
        // Rollback the transaction if there was an error
        $conn->rollback();
        echo $e->getMessage();
    }
}

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
                <th>Address</th>
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
                            <td>{$row['address']}</td>
                            <td>{$row['date_added']}</td>
                            <td>
                                <a href='doctor_view.php?id={$row['patients_id']}' class='action-btn view'><i class='fa fa-eye'></i></a>
                                
                                <a href='?delete_id={$row['patients_id']}' class='action-btn delete' onclick='return confirm(\"Are you sure you want to delete this record?\")'><i class='fa fa-trash'></i></a> 
                                
                                <a href='doctor_eyeresult.php?id={$row['patients_id']}' class='action-btn add'><i class='fa fa-plus'></i></a>
                            </td>
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
