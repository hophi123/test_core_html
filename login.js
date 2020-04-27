function login (){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == '' || password == ''){
      alert('Please enter all field');
    }else{
        alert('Login Success');
        window.location = "home.html";
    }
    

  };

  
