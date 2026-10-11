let password;
       do {
        password = prompt("Enter password");
        if (password === "null") {
             document.write("Login canceled");
        } 
        if (password ==="12345") {
            document.write("Login Successful");
        }
        
    else {
            document.write("Wrong Password");
        }
       } while (password !=="12345")