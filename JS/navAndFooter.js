
function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "navMenu") {
        i.className += " responsive";
    }
    else {
        i.className = "navMenu";
    }
}

function handleLoginClick() {
    var isLoggedIn = localStorage.getItem('email') !== null;

    if (isLoggedIn) {
        // User is logged in, perform logout actions
        logout();
    } else {
        // User is not logged in, redirect to the login page
        window.location.href = '../pages/login.html';
    }
}

function updateNavigationButtons() {
    var isLoggedIn = localStorage.getItem('email') !== null;
    var loginLink = document.getElementById('loginLink');
    var registerLink = document.getElementById('registerLink');
    var userName1=document.getElementById("userName1");
    var myUserName=document.getElementById('myUserName');
    var nav=document.getElementsByClassName('navBtn')[0];

    if (isLoggedIn) {
        // User is logged in, update buttons to show logout
        loginLink.innerHTML = '<button class="btn white-button" id="loginBtn" onclick="handleLoginClick()"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #1c4792;"></i></button>';
        loginBtn.style.background='none';
        loginBtn.style.width='40px';
        loginBtn.style.height='40px';
        registerLink.style.display = 'none'; // Hide the register button when logged in
        userName1.innerHTML=localStorage.getItem('name');
        userName1.style.color= 'rgba(33, 33, 140, 1)';
        myUserName.style.display='flex';
        nav.style.flexDirection='row-reverse';

    } else {
        // User is not logged in, show login and register buttons
        loginLink.innerHTML = '<button class="btn white-button" id="loginBtn" onclick="handleLoginClick()">Sign In</button>';
        registerLink.innerHTML = '<button class="btn" id="registerBtn">Sign Up</button>';
        registerLink.style.display = 'inline-block'; // Show the register button when not logged in
    }
}


// Initial call to set the correct buttons when the page loads
updateNavigationButtons();

function logout() {
    // Clear user data from localStorage or perform other logout actions
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('name');

    // Redirect to the home page or any other desired location after logout
    window.location.href = '../index.html';
}

// Call updateNavigationButtons after logout to update the button state
updateNavigationButtons();

