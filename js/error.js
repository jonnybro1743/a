function executeAfterRedirect() {
    // Redirect to signin.html
    window.location.href = "signin.html";

    // Run after a delay
    setTimeout(function() {
        // Create the element
        let error = document.createElement('div');
        
        // Apply styles
        error.style.display = "block";
        error.style.width = "250px";
        error.style.height = "70px";
        error.style.background = "red";
        
        // Append the element to the body
        document.body.appendChild(error);
        
        console.log("1"); // This code will run after the whole page has been loaded
    }, 2000); // Adjust the delay time as needed (in milliseconds)
}

// Call the function to execute the code
executeAfterRedirect();
