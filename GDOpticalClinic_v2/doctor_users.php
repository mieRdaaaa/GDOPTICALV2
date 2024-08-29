<?php
include('doctor_homepage.php');
include('db.php');

// Check if a delete request has been made
if (isset($_GET['delete_id'])) {
    $delete_id = $_GET['delete_id'];
    
    // SQL query to delete the record
    $delete_sql = "DELETE FROM accounts WHERE accounts_id = ?";
    
    // Prepare the statement
    if ($stmt = $conn->prepare($delete_sql)) {
        // Bind the parameters
        $stmt->bind_param("i", $delete_id);
        
        // Execute the statement
        if ($stmt->execute()) {
            echo "";
        } else {
            echo "Error deleting record: " . $stmt->error;
        }
        
        // Close the statement
        $stmt->close();
    } else {
        echo "Error preparing statement: " . $conn->error;
    }
}

$search = "";
if (isset($_GET['search'])) {
    $search = $_GET['search'];
}

// Fetch data with search filter
$sql = "SELECT accounts_id, fullname, username, password, gender, birthdate, contact_number, address, account_type FROM accounts 
        WHERE fullname LIKE '%$search%' 
        OR contact_number LIKE '%$search%' 
        OR address LIKE '%$search%'       
        OR account_type LIKE '%$search%'";


$result = $conn->query($sql);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Table</title>
    <link rel="stylesheet" href="css/doctor_users.css">
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
                <th>Full Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                // Output data of each row
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>{$row['fullname']}</td>
                            <td>{$row['username']}</td>
                            <td>{$row['password']}</td>
                            <td>{$row['gender']}</td>
                            <td>{$row['birthdate']}</td>
                            <td>{$row['contact_number']}</td>
                            <td>{$row['address']}</td>
                            <td>{$row['account_type']}</td>
                            <td>
                                <a href='doctor_usersedit.php?id={$row['accounts_id']}' class='action-btn view'><i class='fa fa-edit'></i></a>
                                
                                <a href='?delete_id={$row['accounts_id']}' class='action-btn delete' onclick='return confirm(\"Are you sure you want to delete this record?\")'><i class='fa fa-trash'></i></a> 
                                
                          </tr>";
                }
            } else {
                echo "<tr><td colspan='8'>No records found</td></tr>";
            }
            
            ?>
        </tbody>
    </table>
</body>
</html>
