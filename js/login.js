document.getElementById('ligin-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);


    // get user password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    // console.log(userPass);
    if (userEmail == 'fahim3033@.com' && userPass == 'fahim3033') {
        window.location.href = 'banking.html'

    }
    // else {
    //     console.log('fake user');
    // }

})

