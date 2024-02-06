function displayUserInfo() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;

    const fullName = `${firstName} ${lastName}`;
    const userInfoDisplay = document.getElementById('userInfoDisplay');

    userInfoDisplay.innerHTML = `Full Name: ${fullName}<br>Age: ${age}<br>Profession: ${profession}`;

    if (fullName.length > 5) {
        userInfoDisplay.className = 'green-text';
    } else {
        userInfoDisplay.className = 'red-text';
    }

    // Additional functionality for changing background color based on profession
    switch (profession) {
        case 'it':
            userInfoDisplay.style.backgroundColor = 'purple';
            break;
        case 'hospitality':
            userInfoDisplay.style.backgroundColor = 'yellow';
            break;
        default:
            userInfoDisplay.style.backgroundColor = 'white';
            break;
    }
}
