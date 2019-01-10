function doLogin(e){
    e.preventDefault();

    var email = $('#email').val();

    if(!email){
        alert("Please insert your email");
    }
    else{
        localStorage.setItem('email', email);
        window.location.href = "home.html";
    }
}

$(function() {
    $('#f_login').submit(doLogin);
});