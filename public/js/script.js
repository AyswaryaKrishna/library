function loginvalidate(){
    var username=document.getElementById('uname').value;
    var password=document.getElementById('pwd').value;
    if(username.trim()==''||password.trim()==''){
        alert('Username or Password cannot be empty');
        return false;
    }
    else{
        // alert('Thank you for logged in');;
        return true;
    }
}


function signupSubmit(){
    var alertLabel=document.getElementsByClassName('alertLabel');
    for(i=0;i<alertLabel.length;i++){
        alertLabel[i].innerHTML='';
    }
    var user=document.getElementById('unInput').value;
    var email=document.getElementById('emailInput').value;
    var pwd=document.getElementById('pwdInput').value;
    var confirmPwd=document.getElementById('cpwdInput').value;
    var phone=document.getElementById('phoneInput').value;
    var emailregexp=/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+).([a-z]){2,3}(.[a-z]{2,3})?$/;
    var phoneregexp=/^([0-9]{3})([-. ]?)([0-9]{3})([-. ]?)([0-9]{4})$/;
    var pwdregexp=/^(?=.*\d)(?=.*[a-z])(?!.*\s)(?=.*[A-Z]).{8,12}$/;

    if(user.trim()==''){
        document.getElementById('unLabel').innerHTML="Username cannot be empty";
        return false;
    }
    else if(pwd.trim()=='' || pwdregexp.test(pwd)==false){
        document.getElementById('pwdLabel').innerHTML='Please check the Password';
        return false;
    }
    else if(emailregexp.test(email)==false || email.trim()==''){
        document.getElementById('emailLabel').innerHTML='Please check the Email';
        return false;
    }
    else if(phoneregexp.test(phone)==false){
        document.getElementById('phoneLabel').innerHTML='Verify the Phone number';
        return false;
    }
    else if(pwd!=confirmPwd){
        document.getElementById('cpwdLabel').innerHTML='Password is not matching';
        return false;
    }
    else{
        alert("Registration Completed Successfully.")
        return true;
    }
}


function pwdstrengthchecker() {
    var alertLabel=document.getElementById ('pwdLabel');
    var pwd=document.getElementById('pwdInput').value;
    // var pwd=document.getElementById('signupinputPassword4').value;
    var specialchar='/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/';
    var score=0;
    for(var i=0;i<pwd.length;i++){
        if(specialchar.indexOf(pwd.charAt(i))>-1){
            score +=20;
            break;
        }
    }
    if(/([a-z])/.test(pwd)){
        score+=20;
    }
    if(/([A-Z])/.test(pwd)){
        score+=20;
    }
    if(/([\d])/.test(pwd)){
        score+=20;
    }
    if(pwd.length>=8){
        score+=20;
    }

    var strength='Minimum 8 characters';
    var bgcolor='';
    
    if(score>=100){
        strength="Strong";
        bgcolor='green';
    }
    else if(score>=80){
        strength="Medium";
        bgcolor='blue';
    }
    else if(score>=60){
        strength="Weak";
        bgcolor='orange';
    }    
    else{
        strength='Very Weak';
        bgcolor='red';
    }   
    alertLabel.style.height='1.5em';
    alertLabel.innerHTML=strength;
    alertLabel.style.backgroundColor=bgcolor;
    alertLabel.style.color="white";

    if(pwd.length==0){
        alertLabel.innerHTML='Minimum 8 characters';
        alertLabel.style.color='red';
    }
  }
