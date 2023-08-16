let goLogin = document.querySelector('.end_login_btn');
let registerName = document.querySelector('.register_name');
let registerEmail = document.querySelector('.register_email');
let registerPsw = document.querySelector('.register_psw');
let registerReTypePsw = document.querySelector('.register_re_type_psw');
let registerErr = document.querySelector('.register_err');




goLogin.addEventListener("click", () => {
    window.location.href = './login.html'
})

function regSubmut(e) {
    console.log(e);
    e.preventDefault()
    let checkNewUser = users.find(a => a.email === registerEmail.value)
    if (checkNewUser) {
        registerErr.innerHTML = 'Bu istifadechi artiq movcuddur'
    } else {
        if (registerReTypePsw.value === registerPsw.value) {
            const newUser = {
                id: users.length + 1,
                name: registerName.value,
                email: registerEmail.value,
                password: registerPsw.value
            }
            users.push(newUser)
            localStorage.setItem('users',JSON.stringify(users))
            registerErr.innerHTML = "Qeydiyyat ugurla tamamlandi"
        }else{
            registerErr.innerHTML="Shifre eyni deyil"
        }
    }

}
