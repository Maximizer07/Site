$(function() { $('#footer').load('footer.html') })
function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('input-email').value;
    var valid = re.test(myMail);
    if (valid) alert('Вы успешно подписались на рассылку!');
    else alert('Адрес электронной почты введен неправильно!');
}
