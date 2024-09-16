function showAlert(message) {
    alert(message);
  }
  

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userType = document.getElementById("user-type").value;
  

    if (username === "" || password === "") {
      showAlert("Please enter username and password.");
      return;
    }
  

    if (username === "admin" || password === "admin") {
      showAlert("Incorrect username or password. Please try again.");
      return;
    }
  
  
    this.submit();
  });
  