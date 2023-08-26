function myFunction(form) {
if (form.username.value=="aayush") { 
        if(form.email.value=="aayushs894@gmail.com"){
                if (form.password.value=="password") {              
                        location="index.html" 
                        alert("login Succesfully") 
                } 
                else{
                        alert("Incorrect Password")
                }
        }
        else {
                alert("Incorrect Email")
        }
} 
else {  
        alert("Incorrect detail Username")
}
};