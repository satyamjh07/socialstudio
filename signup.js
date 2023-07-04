// Function to handle form submission and store data in local storage
function storeUserData() {
    // Retrieve values from form inputs
    var usernamevalue = document.getElementById("usrnm").value;
    var passwordvalue = document.getElementById("pass").value;
    var emailvalue = document.getElementById("email").value;
  
    // Create an object to store the user data
    var userData = {
      username: usernamevalue,
      password: passwordvalue,
      email: emailvalue
    };
  
    // Store the user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));
  
    // Optional: Show a success message or perform other actions
    alert("Succesfully Signed In")
    console.log(userData)
    // Optional: Redirect to another page or perform other actions
    // window.location.href = "success.html";
  }

