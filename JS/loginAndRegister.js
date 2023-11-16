function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "navMenu") {
        i.className += " responsive";
    } 
    else {
        i.className = "navMenu";
    }
}
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}
function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

// // register Validation
// var formdata1 = document.getElementsByClassName('formBox');
// var register1=document.getElementById('register');
// var nameForm=document.getElementById('userName');
// var emailForm=document.getElementById('regEmail');
// var passwordForm=document.getElementById('regpass');
// var confirmPasswordForm=document.getElementById('confirmPass');
// console.log(nameForm.value);

// var usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
// // console.log(usersData);

// register1.addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (passwordForm.value != confirmPasswordForm.value) {
//         Swal.fire({
//             position: 'center',
//             icon: 'error',
//             title: 'Password and Confirm Password are not the same',
//             showConfirmButton: false,
//             timer: 6000
//         });
//     }
//     else {

      
//         let user = {
//             name: nameForm.value,
//             email: emailForm.value,
//             password: passwordForm.value
//         };
//         if (usersData != null) {
//             let isExist = false;
//             for (let i = 0; i < usersData.length; i++) {
//                 if (usersData[i]['email'] == emailForm.value) {
//                     Swal.fire({
//                         position: 'center',
//                         icon: 'error',
//                         title: 'Email already exists',
//                         showConfirmButton: false,
//                         timer: 6000
//                     });
//                     isExist = false;
//                     return;
//                 }
//                 else if (usersData[i]['name'] == nameForm.value) {
//                     Swal.fire({
//                         position: 'center',
//                         icon: 'error',
//                         title: 'Name already exists',
//                         showConfirmButton: false,
//                         timer: 6000
//                     });
//                     isExist = false;
//                     return;
//                 }
//                 else {
//                     isExist = true;

//                 }

//             }
//             if (isExist == true) {
//                 usersData.push(user);
//                 localStorage.setItem('users', JSON.stringify(usersData));
//                 console.log(localStorage.getItem('users'));
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'Your account was created successfully',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//                     .then(function () {
//                         window.location = "../index.html";
//                     });
// ;
//             }
//         }
//         else {

//             usersData.push(user);
//             localStorage.setItem('users', JSON.stringify(usersData));
//             console.log(localStorage.getItem('users'));
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Your account was created successfully',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         };
//         //  json object:> string




//     }
// });