const response = {
    status: 'connected',
    authResponse: {
        accessToken: this.statusToken,
        expiresIn: '...',
        signedRequest: '...',
        userID: this.id
    }
}

const setupFb = () => {
    return new Promise(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '676413396476455',
                cookie: true,
                xfbml: true,
                version: 'v7.0'
            });

            FB.AppEvents.logPageView();

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })
}

const submitLogin = () => {
    FB.login(response => {
        if (response.authResponse) {
            alert("Login By Facebook Success!!");
            window.location = "transaction.html";
        } else {
            console.log("User login failed");
        }
    });
}

const eventLogin = () => {
    const fb = document.getElementById('facebook');
    fb.addEventListener('click', (e) => {
        e.preventDefault();
        submitLogin();
    })
}

const checkLogin = () => {  
    return new Promise(() => {
        window.FB.getLoginStatus((response) => {
            statusChangeCallback(response);
        });
    });
}

const initFunc = async () => {
    await setupFb()
        .then(eventLogin());
    await checkLogin()
}

initFunc();