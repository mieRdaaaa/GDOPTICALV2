<!DOCTYPE html>
<html>
<head>
    <title>GD OPTICAL CLINIC</title>
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="images/ico.png" />
</head>
<body>
    <div class="main-content">
        <div class="container">
            <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "gdoptical_db";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Get the number of patients added today
            $result = $conn->query("SELECT COUNT(*) as count FROM patients WHERE DATE(date_added) = CURDATE()");
            $patients_today = $result ? $result->fetch_assoc()['count'] : 0;

            // Get the number of patients added yesterday
            $result = $conn->query("SELECT COUNT(*) as count FROM patients WHERE DATE(date_added) = CURDATE() - INTERVAL 1 DAY");
            $patients_yesterday = $result ? $result->fetch_assoc()['count'] : 0;

            // Get the total number of patients
            $result = $conn->query("SELECT COUNT(*) as count FROM patients");
            $total_patients = $result ? $result->fetch_assoc()['count'] : 0;

            $conn->close();
            ?>

            <div class="dashboard">
                <div class="card">
                    <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                    <div class="card-info">
                        <h4>Patients Today</h4>
                        <p><?php echo $patients_today; ?></p>
                    </div>
                </div>
                <div class="card">
                    <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                    <div class="card-info">
                        <h4>Patients Yesterday</h4>
                        <p><?php echo $patients_yesterday; ?></p>
                    </div>
                </div>
                <div class="card">
                    <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                    <div class="card-info">
                        <h4>Total Patients</h4>
                        <p><?php echo $total_patients; ?></p>
                    </div>
                </div>
            </div>

            <?php
            if (isset($_GET['status'])) {
                if ($_GET['status'] == 'success') {
                    echo "<p class='success-message'>Patient added successfully!</p>";
                } else {
                    echo "<p class='error-message'>There was an error adding the patient. Please try again.</p>";
                }
            }
            ?>

            <?php include('secretary_homepage.php'); ?>
        </div>
    </div>
</body>
</html>
