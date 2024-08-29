<?php 
include('secretary_homepage.php');
?>
<!DOCTYPE html>
<html>
<head>
    <title>Add Patient - GD Optical Clinic</title>
    <link rel="stylesheet" href="css/secstyle.css">
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.querySelector('form');
        
        var firstName = document.getElementById('first_name');
        var lastName = document.getElementById('last_name');
        var middleName = document.getElementById('middle_name');
        var contactNo = document.getElementById('contact_no');

        var namePattern = /^[a-zA-Z\s]+$/;
        var numberPattern = /^[0-9]+$/;

        function validateName(input) {
            if (!namePattern.test(input.value)) {
                input.setCustomValidity('This field should contain only letters');
            } else {
                input.setCustomValidity('');
            }
        }

        function validateContact(input) {
            if (!numberPattern.test(input.value)) {
                input.setCustomValidity('This field should contain only numbers');
            } else {
                input.setCustomValidity('');
            }
        }

        firstName.oninput = function() { validateName(firstName); };
        lastName.oninput = function() { validateName(lastName); };
        middleName.oninput = function() { validateName(middleName); };
        contactNo.oninput = function() { validateContact(contactNo); };

        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            validateName(firstName);
            validateName(lastName);
            validateName(middleName);
            validateContact(contactNo);

            if (!form.checkValidity()) {
                alert('Please correct the errors in the form.');
                return;
            }

            var formData = new FormData(form);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'submit_patient.php');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.status === 'success') {
                        alert(response.message);
                        form.reset(); 
                    } else {
                        alert('Failed to add patient'); 
                    }
                } else {
                    alert('Error: ' + xhr.status); 
                }
            };
            xhr.send(formData);
        });
    });
    </script>
</head>
<body>
<div class="main-content">
    <div class="form-container">
        <h2>Patient Information</h2>
        <form method="POST">
            <div class="form-row">
                <label for="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" required>
            </div>
            <div class="form-row">
                <label for="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" required>
            </div>
            <div class="form-row">
                <label for="middle_name">Middle Name:</label>
                <input type="text" id="middle_name" name="middle_name">
            </div>
            <div class="form-row">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" required>
            </div>
            <div class="form-row">
                <label for="medication_history">Medication History:</label>
                <textarea id="medication_history" name="medication_history"></textarea>
            </div>
            <div class="form-row">
                <label for="date_of_birth">Date of Birth:</label>
                <input type="date" id="date_of_birth" name="date_of_birth" required>
            </div>
            <div class="form-row">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-row">
                <label for="contact_no">Contact No.:</label>
                <input type="number" id="contact_no" name="contact_no" required>
            </div>
            <div class="form-row">
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</div>
</body>
</html>
