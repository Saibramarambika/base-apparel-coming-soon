function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

    if (!filter.test(email.value)) {
    document.getElementById("demo").innerHTML = ('Please provide a valid email address');
    email.focus;
    return false;
 }
}