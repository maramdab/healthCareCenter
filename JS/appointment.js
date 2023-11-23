

// appearance of date

//  submit appointment data to local Storage
var inputForm = document.getElementById("bookForm");

var usersAppointmentData = localStorage.getItem('patients') ?JSON.parse(localStorage.getItem('patients')) : [];

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
    var date=document.getElementById('appointmentDate').value;
    var time=document.getElementById('time').value;
    var birthday=document.getElementById('birthday').value;
   
   
    let patientInfo = {
            name: firstNameForm+' '+secondNameForm,
            phone: phoneForm,
            address: addressForm,
            primary1:primary,
            dental1:dental,
            motherhood1:motherhood,
            lab1:lab,
            date1:date,
            time1:time,
            birthdaydate:birthday

        };
 
    
        if(usersAppointmentData!=null)
        {
                  let sum=0;
                let sum2=0;
                     for(let i=0;i< usersAppointmentData.length;i++){
                        if(usersAppointmentData[i]['date1']===date){
                             sum2++;
                            
                        }
                         console.log('sum2',sum2)
                    }
                      
                if(sum2<=22){

                        for(let i=0;i< usersAppointmentData.length;i++){
                            if(usersAppointmentData[i]['date1']===date){
                                 if (usersAppointmentData[i]['time1']===time){
                                         sum++;
                            }
                            }
                                
                        
                    }
                         if (sum<2){
                         usersAppointmentData.push(patientInfo);
                        localStorage.setItem('patients', JSON.stringify(usersAppointmentData));
         
                            
                    }
                    else {
                        Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'No available places in this time',
                                showConfirmButton: false,
                                timer: 6000
                            });
                          
                    }
                }
                
                else{
                    Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'No available places in this date',
                            showConfirmButton: false,
                            timer: 6000
                        });
                    
                }
                  
                    
                   
        }
        else{
                 usersAppointmentData.push(patientInfo);
                localStorage.setItem('patients', JSON.stringify(usersAppointmentData));
        }

   
});
