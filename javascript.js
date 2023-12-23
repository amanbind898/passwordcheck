document.getElementById('password').addEventListener('input', function() {
    var password = this.value;

    // Call the function to check password strength and update result
    updatePasswordStrength(password);
});

function updatePasswordStrength(password) {
    // Implement your password strength checking logic here
    // This is a simple example, you can customize it based on your requirements

    var strength = 0;

    // Check for minimum length
    var lengthIndicator = document.getElementById('length-indicator');
    if (password.length >= 8) {
        strength += 1;
        lengthIndicator.innerHTML = '✅ Length';
        lengthIndicator.classList.add('valid');
    } else {
        lengthIndicator.innerHTML = '❌ Length';
        lengthIndicator.classList.remove('valid');
    }

    // Check for the presence of both uppercase and lowercase characters
    var caseIndicator = document.getElementById('case-indicator');
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        strength += 1;
        caseIndicator.innerHTML = '✅ Uppercase & Lowercase';
        caseIndicator.classList.add('valid');
    } else {
        caseIndicator.innerHTML = '❌ Uppercase & Lowercase';
        caseIndicator.classList.remove('valid');
    }

    // Check for the presence of numbers
    var numberIndicator = document.getElementById('number-indicator');
    if (/\d/.test(password)) {
        strength += 1;
        numberIndicator.innerHTML = '✅ Number';
        numberIndicator.classList.add('valid');
    } else {
        numberIndicator.innerHTML = '❌ Number';
        numberIndicator.classList.remove('valid');
    }

    // Check for the presence of special characters
    var specialCharIndicator = document.getElementById('special-char-indicator');
    if (/[^a-zA-Z0-9]/.test(password)) {
        strength += 1;
        specialCharIndicator.innerHTML = '✅ Special Character';
        specialCharIndicator.classList.add('valid');
    } else {
        specialCharIndicator.innerHTML = '❌ Special Character';
        specialCharIndicator.classList.remove('valid');
    }

    // Update the strength meter UI
    var strengthMeter = document.getElementById('strength');
    var bars = strengthMeter.getElementsByClassName('bar');
    function colorpic(i) {
        if (i == 0) {
            return '#ff2f00';
        } else if (i == 1 ) {
            return '#ff9d00';
        }
        else if (i == 2) {
            return '#ffff00';
        }
        else if (i == 3) {
            return '#00ff00';
        }
      
    }
    
    for (var i = 0; i < bars.length; i++) {
        if (i < strength) {
            bars[i].style.backgroundColor = colorpic(i);
        } else {
            bars[i].style.backgroundColor = 'transparent';
        }
    }
    

    // Update the result text
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Password Strength: ${strength}/4`;
}
