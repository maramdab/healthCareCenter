// function handleLoginClick() {
//     var isLoggedIn = localStorage.getItem('email') !== null;

//     if (isLoggedIn) {
//         // User is logged in, perform logout actions
//         logout();
//     } else {
//         // User is not logged in, redirect to the login page
//         window.location.href = '../pages/login.html';
//     }
// }

// function updateNavigationButtons() {
//     var isLoggedIn = localStorage.getItem('email') !== null;
//     var loginLink = document.getElementById('loginLink');
//     var registerLink = document.getElementById('registerLink');
//     var userName1=document.getElementById("userName1");
//     var myUserName=document.getElementById('myUserName')

//     if (isLoggedIn) {
//         // User is logged in, update buttons to show logout
//         loginLink.innerHTML = '<button class="btn white-button" id="loginBtn" onclick="handleLoginClick()">Logout</button>';
//         registerLink.style.display = 'none'; // Hide the register button when logged in
//         userName1.innerHTML=localStorage.getItem('name');
//         myUserName.style.display='flex';

//     } else {
//         // User is not logged in, show login and register buttons
//         loginLink.innerHTML = '<button class="btn white-button" id="loginBtn" onclick="handleLoginClick()">Sign In</button>';
//         registerLink.innerHTML = '<button class="btn" id="registerBtn">Sign Up</button>';
//         registerLink.style.display = 'inline-block'; // Show the register button when not logged in
//     }
// }

// // Initial call to set the correct buttons when the page loads
// updateNavigationButtons();

// function logout() {
//     // Clear user data from localStorage or perform other logout actions
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     localStorage.removeItem('name');

//     // Redirect to the home page or any other desired location after logout
//     window.location.href = '../index.html';
// }

// // Call updateNavigationButtons after logout to update the button state
// updateNavigationButtons();
