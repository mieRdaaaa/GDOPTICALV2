<?php 
include('doctor_homepage.php');

$success_message = isset($_GET['success_message']) ? $_GET['success_message'] : "";
$warning_message = isset($_GET['warning_message']) ? $_GET['warning_message'] : "";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add User</title>
    <link rel="stylesheet" href="css/add_user_secretary.css">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
    <link rel="shortcut icon" href="images/ico.png" />

    
    
</head>
<body>
    <section class="container">
        <header>Create User</header>

        <?php if (!empty($warning_message)): ?>
            <div class="warning-message" style="color: #39FF14 !important;"><?php echo $warning_message; ?></div>
        <?php endif; ?>
        <form action="register.php" method="post" class="form">
            <div class="input-box">
                <label>Full Name</label>
                <input type="text" name="fullname" placeholder="Enter full name" required>
            </div>

            <div class="input-box">
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter username" required>
            </div>

            <div class="input-box">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" required>
            </div>

           <!-- Address Selector -->
<div class="input-box">
    <label>Region</label>
    <select id="region" name="region" onchange="loadProvinces()" required>
        <option value="">Select Region</option>
    </select>
</div>

<div class="input-box">
    <label>Province</label>
    <select id="province" name="province" onchange="loadCities()" required>
        <option value="">Select Province</option>
    </select>
</div>

<div class="input-box">
    <label>City / Municipality</label>
    <select id="city" name="city" onchange="loadBarangays()" required>
        <option value="">Select City / Municipality</option>
    </select>
</div>

<div class="input-box">
    <label>Barangay</label>
    <select id="barangay" name="barangay" required>
        <option value="">Select Barangay</option>
    </select>
</div>


            <div class="column">
            <div class="input-box">
    <label>Contact number</label>
    <input type="number" name="contact_number" id="contact_number" placeholder="Enter phone number" required oninput="validateNumber(this)">
</div>
<div class="input-box">
    <label>Birth of Date</label>
    <input type="date" name="birthdate" id="birthdate" placeholder="Enter birth date" required>
</div>
            </div>

            <div class="gender-box">
                <h3>Gender</h3>
                <div class="gender-option">
                    <div class="gender">
                        <input type="radio" id="check-male" name="gender" value="male" checked>
                        <label for="check-male">Male</label>
                    </div>
                    <div class="gender">
                        <input type="radio" id="check-female" name="gender" value="female">
                        <label for="check-female">Female</label>
                    </div>
                    <div class="gender">
                        <input type="radio" id="check-other" name="gender" value="prefer_not_to_say">
                        <label for="check-other">Prefer not to say</label>
                    </div>
                </div>
            </div>

            <div class="role-box">
    <h3 class="role-header">Select Role</h3>
    <div class="role-option">
        <div class="role">
            <input type="radio" id="check-doctor" name="role" value="doctor" checked>
            <label for="check-doctor">Doctor</label>
        </div>
        <div class="role">
            <input type="radio" id="check-secretary" name="role" value="secretary">
            <label for="check-secretary">Secretary</label>
        </div>
    </div>
</div>


            <button type="submit">Submit</button>
        </form>

        <?php if (!empty($success_message)): ?>
            <div class="success-message"><?php echo $success_message; ?></div>
        <?php endif; ?>
    </section>
    <script src="js/address_selector.js"></script>
    <script>
    function validateNumber(input) {
        // Remove any non-digit characters
        input.value = input.value.replace(/[^0-9]/g, '');
    }
    // Get the current date
    function validateNumber(input) {
        // Remove any non-digit characters
        input.value = input.value.replace(/[^0-9]/g, '');
    }
    // Get the current date
    const today = new Date();

    // Calculate the date that is 18 years ago from today
    const eighteenYearsAgo = new Date(today.setFullYear(today.getFullYear() - 18));

    // Format the date to YYYY-MM-DD
    const maxDate = eighteenYearsAgo.toISOString().split("T")[0];

    // Set the max date for the birthdate input field
    document.getElementById('birthdate').setAttribute('max', maxDate);
</script>
</body>
</html>
