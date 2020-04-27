function login (){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === '' || password === ''){
      alert('Please enter all field');
    }
    const body = {
      username: username,
      password: password
    }

    console.log(JSON.stringify(body));

  };

  
