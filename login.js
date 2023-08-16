let goRegister=document.querySelector('.end_reg_btn');
let loginEmail=document.querySelector('.login_email');
let loginPsw=document.querySelector('.login_psw');
let loginErr=document.querySelector('.login_err');

goRegister.addEventListener('click',()=>{
    window.location.href="./register.html";
})
function loginSubmit(e){
e.preventDefault()
let checkUser=users.find(a=>a.email===loginEmail.value);
if(checkUser){
   if(checkUser.password===loginPsw.value){
    window.location.href="./index.html"
    console.log(checkUser);
    localStorage.setItem('loggedInUser',JSON.stringify(checkUser));
   }else{
    loginErr.innerHTML="Shifre yalnishdir"
   } 
}else{
    loginErr.innerHTML="istifadechi movcud deyil"
}
}