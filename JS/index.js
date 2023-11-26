function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "navMenu") {
        i.className += " responsive";
    }
    else {
        i.className = "navMenu";
    }
}

function redirectApp(){
    if(localStorage.getItem('email')!=null){
        window.location = "../pages/appointment.html";
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'You should Login First',
            showConfirmButton: false,
            timer: 6000
        }).then(function () {
            window.location = "../pages/login.html";
            });
        
    }
}

