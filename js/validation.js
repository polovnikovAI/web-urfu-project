function checkFirstname() {
    let firstname = document.getElementById('firstName').value;
    let regex = /^[a-zA-Z]{2,15}$/;

    if (regex.test(firstname)) {
        document.getElementById('firstname_check').style.color = 'green';
        document.getElementById('firstname_check').innerHTML = 'Input correct :)';
        return true;
    } else {
        document.getElementById('firstname_check').style.color = 'red';
        document.getElementById('firstname_check').innerHTML = 'Please, enter 2-15 characters';
        return false;
    }
}

function checkLastname() {
    let lastname = document.getElementById('lastName').value;
    let regex = /^[a-zA-Z]{2,20}$/;

    if (regex.test(lastname)) {
        document.getElementById('lastname_check').style.color = 'green';
        document.getElementById('lastname_check').innerHTML = 'Input correct :)';
        return true;
    } else {
        document.getElementById('lastname_check').style.color = 'red';
        document.getElementById('lastname_check').innerHTML = 'Please, enter 2-20 characters';
        return false;
    }
}

function checkPhone() {
    let phone = document.getElementById('phone').value;
    let regex = /^9[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    if (regex.test(phone)) {
        document.getElementById('phone_check').style.color = 'green';
        document.getElementById('phone_check').innerHTML = 'Input correct :)';
        return true;
    } else {
        document.getElementById('phone_check').style.color = 'red';
        document.getElementById('phone_check').innerHTML = 'Please, enter phone in format *912-345-67-89*';
        return false;
    }
}

function checkQuantity() {
    let quantity = document.getElementById('quantity').value;

    if (quantity >= 1 && quantity <= 20) {
        document.getElementById('quantity_check').style.color = 'green';
        document.getElementById('quantity_check').innerHTML = 'Input correct :)';
        return true;
    } else {
        document.getElementById('quantity_check').style.color = 'red';
        document.getElementById('quantity_check').innerHTML = 'Please, enter correct quantity 1-20';
        return false;
    }
}

function orderComplete() {
    let firstname = document.getElementById('firstName').value;
    let lastname = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let quantity = document.getElementById('quantity').value;

    if (firstname != '' && lastname != '' && phone != '' && quantity != '') {
        document.getElementById('orderSummary').innerHTML = 'Hello, ' + firstname + ' ' + lastname + ' !';
        document.getElementById('orderSummary').innerHTML += '<p>Your phone number: ' + phone + '.</p>';
        document.getElementById('orderSummary').innerHTML += '<p>You ordered : ' + quantity + ' pieces.<br />';
    } else {
        document.getElementById('orderSummary').style.color = 'red';
        document.getElementById('orderSummary').innerHTML = 'Fill in all the fields';
    }
}
