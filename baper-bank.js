
let mybutton = document.getElementById('button').addEventListener('click', function () {

    let myMail = document.getElementById('your-email');
    let emailvalue = myMail.value;
    let mypassword = document.getElementById('your-password');
    let passwordValue = mypassword.value;
   

    if(emailvalue === 'abc12@gmail.com' && passwordValue === '123456'){
        alert ('valid User')
    
        window.location.href = 'second.html';
    }
    else{
        alert('please your Current Password And Email');

      }
      
}) 


  