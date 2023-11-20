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
    var myUserName=document.getElementById('myUserName')

    if (isLoggedIn) {
        // User is logged in, update buttons to show logout
        loginLink.innerHTML = '<button class="btn white-button" id="loginBtn" onclick="handleLoginClick()">Logout</button>';
        registerLink.style.display = 'none'; // Hide the register button when logged in
        userName1.innerHTML=localStorage.getItem('name');
        myUserName.style.display='flex';

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


// appearance of date

//  submit appointment data to local Storage
var inputForm = document.getElementById("bookForm");

var usersAppointmentData = JSON.parse(localStorage.getItem('patients')) || [];

inputForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstNameForm = document.getElementById('firstNameForm').value;
    var secondNameForm = document.getElementById('secondName').value;
    var phoneForm = document.getElementById("phoneNumber").value;
    var addressForm = document.getElementById("address").value;
    var primary=document.getElementById("primaryCare").value;
    var dental=document.getElementById("dentalCare").value;
    var motherhood=document.getElementById("motherhood").value;
    var lab=document.getElementById("labTests").value;
    var date=document.getElementById('one').value;
    var time=document.getElementById('time').value;

    let patientInfo = {
            name: firstNameForm+' '+secondNameForm,
            phone: phoneForm,
            address: addressForm,
            primary1:primary,
            dental1:dental,
            motherhood1:motherhood,
            lab1:lab,
            date1:date,
            time1:time

        };
    
        if(usersAppointmentData!=null)
        {
                    var sum=0;
                    var sum2=0;
                    for(let i=0;i< usersAppointmentData.length;i++){
                        if (usersAppointmentData[i]['time1']===time){
                            sum++;
                        }
                        else if(usersAppointmentData[i]['date1']===date){
                             sum2++;
                        }
                    }
                    if (sum>=2){
                        Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'No available places in this time',
                                showConfirmButton: false,
                                timer: 6000
                            });
                    }
                  
                   else if (sum2>=3){
                        Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'No available places in this date',
                                showConfirmButton: false,
                                timer: 6000
                            });
                    }
                    else{
                         usersAppointmentData.push(patientInfo);
                        localStorage.setItem('patients', JSON.stringify(usersAppointmentData));
                    }
        }
        else{
                 usersAppointmentData.push(patientInfo);
                localStorage.setItem('patients', JSON.stringify(usersAppointmentData));
        }

   
});
