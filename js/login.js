const hostServer = 'http://localhost:8080';

function login (){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == '' || password == ''){
      alert('Please enter all field');
    }else{
        const body = {
          name : username,
          password : password
      }
      console.log(body);
      loginApi(JSON.stringify(body));
    }
    

  };

  const loginApi = async (body) => {
    const response = await fetch(`${hostServer}/api/user/login`, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = response.json();
    json.then(res => {
        console.log(res);
        alert(res.meta.message);
        const status = res.meta.code;
        if (status === "200") {
            window.location.href = `home.html`;
        }
    }).catch(err => {
        console.log(err);
    })

}

function register (){
    window.location = "register.html";
};

  
