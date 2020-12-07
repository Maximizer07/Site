function show_hide_password(target){
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}
function validate() {
    let a = document.forms["myForm"]["nickname"].value;
    if (a == "") {
        alert("Укажите имя пользователя или почту");
        return false;
    }
    let b = document.forms["myForm"]["password-login"].value;
    if (b == "") {
        alert("Укажите пароль");
        return false;
    }
    if (document.getElementById("check").checked){
        alert("Ваш пароль сохранен");
        return true;
    }
}