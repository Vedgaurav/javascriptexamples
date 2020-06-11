


function createMap(){
    let userMap = new Map();
    localStorage.userMap = JSON.stringify(Array.from(userMap))
}

function validateUser(){
    //alert("Came in validate user")
    var emailID = document.getElementById("emailID").value
    var      = document.getElementById("password").value
    console.log(password)
    userMap = new Map(JSON.parse(localStorage.userMap))
    console.log(userMap)
    var flag = false;
    try{
    if(emailID == userMap.get(emailID).emailID) {
        //alert("Email Id matched")
       
        if(password == userMap.get(emailID).password){
            flag = true;
            //alert("password matched")
            sessionStorage.setItem("emailID", emailID )
            window.location = "userpage.html"
        }
        }
    }
    catch(e){
        console.log("Error: " + " "+ e.description);
        flag  = false
    }
    if(flag != true){
        alert("Incorrect Username or password...")
        document.getElementById("emailID").value = ""
        document.getElementById("password").value = ""
        document.getElementById("emailID").focus();
        return false;
    } 
    }



function userPage(){
    var emailID = sessionStorage.getItem("emailID");
    console.log(emailID);
    document.getElementById("userpage").innerHTML = "Welcome" +"\t"+ emailID;
   // document.write("Welcome" + "\t" + emailID);
    
}

function registerUser(){
    console.log("Came into the register User function")
    var user = {
        firstName: document.getElementById("fname").value,
        lastName : document.getElementById("lname").value,
        emailID  : document.getElementById("emailID").value,
        password : document.getElementById("password").value
     };
    createMap()

    userMap = new Map(JSON.parse(localStorage.userMap))
    console.log(typeof(userMap))
    userMap.set(user.emailID, user)
    sessionStorage.setItem("userMap", userMap)
    console.log(user)
    console.log(userMap)
    localStorage.userMap = JSON.stringify(Array.from(userMap))
    alert("Registration Completed User registered!!! \n\n\nYou will be redirected to Login  Page")
    loginRedirect()
}

function loginRedirect(){
    window.location = "login.html"
}

function validateRegistrationForm(){

    var emailID = document.getElementById("emailID").value;
    console.log("Came to start")
    
    if(document.getElementById("fname").value == ""){
        alert("Please provide your first name!!!!");
        document.getElementById("fname").focus();
        return false;
    }
    if(document.getElementById("lname").value == ""){
        alert("Please provide your last name!!!!");
        document.getElementById("lname").focus();
        return false;
    }
    if(document.getElementById("fname").value == document.getElementById("lname").value){
        alert("First name and Last name cannot be same!!!!");
        document.getElementById("lname").focus();
        return false;
    }

    if(emailID == ""){
        alert("Please provide your Email ID !!!");
        document.getElementById("emailID").focus();
        return false;
    }
    if(validateEmailID(emailID)){
        if(document.getElementById("password").value == ""){
            alert("Please provide your password!!!!");
            document.getElementById("password").focus();
            return false;
        }
        if(document.getElementById("confirmPassword").value == ""){
            alert("Please provide your Confirm Password!!!!");
            document.getElementById("confirmPassword").focus();
            return false;
        }
        console.log(typeof(document.getElementById("confirmPassword")))
        console.log(typeof(document.getElementById("password")))
        if(document.getElementById("password").value != document.getElementById("confirmPassword").value){
            alert("Password and Confirm Password should match!!!!!")
            document.getElementById("confirmPassword").focus();
            return false;
        }
        registerUser();
    }
    
    // if(validateEmailID(emailID)){
    //     registerUser();
    
    return true;
    
}

function validateEmailID(emailID){

    //var  emailID = document.getElementById("emailID").value;
    atPos = emailID.indexOf("@")
    dotPos = emailID.indexOf(".")

    if(atPos < 1 || (dotPos - atPos < 2)){
        alert("Please enter valid email address");
        document.getElementById("emailID").focus();
        return false;
    }
    return true;

}