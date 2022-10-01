////---- Access all Element ----\\\
const regForm = document.getElementById('registration');
const logInForm = document.getElementById('logIn');
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phoneNum = document.getElementById("pnumber");
const password = document.getElementById("password");
const confrimPassword = document.getElementById("conpassword");



//------------------------------------------------------//
//------------------------------------------------------//



//\\++++++++++++++++++++ Switch START ++++++++++++++++++++//\\
function switchFunction(){
    let switchBtn = document.getElementById("switch");
    if(switchBtn.checked){
        regForm.style.display = "none";   //---|| Registration Form hide
        logInForm.style.display = "grid"; //---|| LogIn Form visiable
    }else if(!switchBtn.checked){
        regForm.style.display = "grid";   //---|| Registration Form visiable
        logInForm.style.display = "none"; //---|| LogIn Form hide
    }
}
//\\++++++++++++++++++++ Switch END ++++++++++++++++++++//\\



//------------------------------------------------------//
//------------------------------------------------------//



//\\++++++++++++++++++++ Button START ++++++++++++++++++++//\\
    //--- Registration funtion call ---\\
regForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    registraton()
})
    //--- Log In funtion call ---\\
logInForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    logINvalied()
})
//\\++++++++++++++++++++ Button END ++++++++++++++++++++//\\



//------------------------------------------------------//
//------------------------------------------------------//


//\\++++++++++++++++++++ Registration Function START ++++++++++++++++++++//\\

    //----Registration Success Message [Pop Up] Function && sendData Function defined

function sendData(x,y,z){ //x = successRate , y = count , z = regUserNameValue
    if(x===y){
        swal("Good job!", "You clicked the button!", "success") //swal alert link
    }
}
    //---Registration Success Message Function Defined
function regSuccessMsg(Name){      // Name = regUserNameValue;
    let successClass = registration.querySelectorAll('.form_control');
    let count = successClass.length -1;
    for(i=0; i<successClass.length; i++){
        if(successClass[i].className === "form_control success"){
            let successRate = 0 + i; 
            sendData(successRate,count,Name);
            console.log(Name)//sendData Function call  
        }else{
            return false;
        }
    }
}
//--- Registration Form funtion defined ---\\
function registraton(){
    let regUserNameValue = userName.value.trim();
    let regEmailValue = email.value.trim();
    let regPhnoneNumValue = phoneNum.value.trim();
    let passwordValue = password.value.trim();
    let conPasswordValue = confrimPassword.value.trim();
    
    
    
//*********** Validation Process START ***********\\
    
//----+++---- User Name Validation ---+++---\\

    if(regUserNameValue == ""){
        errorMsg(userName, "Fill up your User Name")
    }else if(regUserNameValue.length<4){
        errorMsg(userName, "Fill up minimum 4 characters")
    }else{successMsg(userName, "Your fill is right")}
    
//----+++---- Email Validation ---+++---\\
    if(regEmailValue == ""){
        errorMsg(email, "Fill up your E-mail");
    }else if(!isEmail(regEmailValue)){  /// call isEmail function
        errorMsg(email, "It's not a valid Email");
    }else{successMsg(email, "Your fill up is right")}
    
//----+++---- Phone Number Validation ---+++---\\
    if(regPhnoneNumValue == ""){
        errorMsg(phoneNum, "Fill up your Phone NUmber")
    }else if(regPhnoneNumValue.length <11){
        errorMsg(phoneNum, "Fill up minimum 11 characters")
    }else{successMsg(phoneNum, "Your fill up is right")}
    
//----+++---- Password Validation ---+++---\\
    if(passwordValue == ""){
        errorMsg(password, "Fill up your Password");
    }else if(passwordValue.length<8){
        errorMsg(password, "Fill up minimum 8 characters");
    }else{successMsg(password, "Your fill up is right")}
    
//----+++---- Confrim Password Validation ---+++---\\
    if(conPasswordValue == ""){
        errorMsg(confrimPassword, "Fill up your Confrim password")
    }else if(conPasswordValue !== passwordValue){
        errorMsg(confrimPassword, "Fill up the same as a password")
    }else{successMsg(confrimPassword, "Your fill up is right")}
    //// registration success message 
    regSuccessMsg(regUserNameValue)//Registration Success Message function Call
    
//    console.log(regUserNameValue);
}
    /// part of Email Validation && defined isEmail function 
function isEmail(value){
    var sym = value.indexOf("@");
    if(sym < 1)return false;
    
    var dot = value.lastIndexOf('.');
    if(dot <= sym + 3) return false;
    if(dot === sym.length -1) return false;
    
    return true;
}
//*********** Validation Process END***********\\

//\\++++++++++++++++++++ Registration Function START ++++++++++++++++++++//\\



//------------------------------------------------------//
//------------------------------------------------------//



//\\++++++++++++++++++++ Log In Function START ++++++++++++++++++++//\\

//*********** Validation Process START ***********\\
function logINvalied(){
    const lusername = document.getElementById('lusername');
    const lpassword = document.getElementById('lpassword');
    
    const luNameValue = lusername.value.trim();
    const lpassWordValue = lpassword.value.trim();
    
    
    //*********** Validation Process START ***********\\
    
//----+++---- User Name Validation ---+++---\\
    if(luNameValue === ""){
        errorMsg(lusername, "Fill up your User Name");
    }else if(luNameValue.length<4){
        errorMsg(lusername, "Fill up minimum 4 characters");
    }else if(luNameValue !== "ZX1234"){
        errorMsg(lusername, "Your user name is wrong")
    }else if(luNameValue === "ZX1234"){
        successMsg(lusername, "Your user name is rigth")}
//----+++---- Password Validation ---+++---\\
    let password = "ZX12345678"
    if(lpassWordValue === ""){
        errorMsg(lpassword, "Fill up your Password");
    }else if(lpassWordValue.length<8){
        errorMsg(lpassword, "Fill up minimum 8 characters");
    }else if(lpassWordValue === password){
        successMsg(lpassword, "Your password is right");
    }
    
    //*********** Validation Process END ***********\\
}

//\\++++++++++++++++++++ Log In Function END ++++++++++++++++++++//\\



//------------------------------------------------------//
//------------------------------------------------------//


//----------- error message function defined ------//
function errorMsg(input, message){
    let Errorappend = input.parentElement;
    let small = Errorappend.querySelector("small");
    let wrongIcon = Errorappend.querySelector(".fa-circle-exclamation");
    let rightIcon = Errorappend.querySelector(".fa-circle-check");
    
    Errorappend.classList.add("error");
    Errorappend.classList.remove("success");
    small.innerHTML = message;
    wrongIcon.style.display ="inline";
    rightIcon.style.display= "none";
}
//----------- success message function defined ------//
function successMsg(input, message){
    let SuccessAppend = input.parentElement;
    let SuccessSmallMsg = SuccessAppend.querySelector("small");
    let rightIcon = SuccessAppend.querySelector(".fa-circle-check");
    let wrongIcon = SuccessAppend.querySelector(".fa-circle-exclamation");
    
    SuccessAppend.classList.add("success");
    SuccessAppend.classList.remove("error");
    SuccessSmallMsg.innerHTML = message;
    rightIcon.style.display = "inline";
    wrongIcon.style.display="none"
}


console.log(`if you want to login for demo test so use
username = ZX1234
password = ZX12345678`)


