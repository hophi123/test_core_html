const registerButton = document.getElementById('btn-register');
const regex_email = '^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$';
const regex_phone = '^[0-9]*$';

registerButton.addEventListener('click', () => {
    checkValidate();
    if (checkValidate()) {
        window.location = "verify.html";
    }
});

const checkValidate = () => {
    let isValidate = false;
    let checkFName = false;
    let checkLName = false;
    let checkEmail = false;
    let checkPhone = false;
    let checkPassword = false;
    let checkConfirmPassword = false;
    const fName = document.getElementById('fname').value;
    const lName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const c_password = document.getElementById('c_password').value;
    if (fName === '') {
        validateMess('e_fname', '* Please Enter Your First Name')
    } else {
        validateMess('e_fname', '')
        checkFName = true;
    }
    if (lName === '') {
        validateMess('e_lname', '* Please Enter Your Last Name')
    } else {
        validateMess('e_lname', '')
        checkLName = true;
    }
    if (email === '') {
        validateMess('e_email', '* Please Enter Your Email')
    } else if (email.match(regex_email) === null) {
        validateMess('e_email', '* An Email Must Be like: abc@gmail.com')
    } else {
        validateMess('e_email', '')
        checkEmail = true;
    }
    if (phone === '') {
        validateMess('e_phone', '* Please Enter Your Phone')
    } else if (phone.match(regex_phone) === null) {
        validateMess('e_phone', '* Phone Must Be A Number')
    } else {
        validateMess('e_phone', '')
        checkPhone = true;
    }
    if (password === '') {
        validateMess('e_password', '* Please Enter Your Password')
    } else {
        validateMess('e_password', '')
        checkPassword = true;
    }
    if (c_password === '') {
        validateMess('e_c_password', '* Please Enter Your Confirm Password')
    }else if(password !== c_password){
        validateMess('e_c_password', '* Password Incorrect')
    }else{
        checkConfirmPassword = true;
    }
    if (checkFName && checkLName && checkEmail && checkPhone && checkPassword && checkConfirmPassword) {
        isValidate = true;
    }
    return isValidate;
}

const validateMess = (id, message) => {
    const dom = document.getElementById(id);
    dom.innerText = message;
}
