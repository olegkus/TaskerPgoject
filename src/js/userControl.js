

let loginPageHtml = require('./html/login.html');



let currentUser = null;

if(currentUser ) {
    let logoutBtn = document.createElement('button');
    logoutBtn.innerHTML = 'Logout';
    logoutBtn.onclick = Logout;

    let userControl = document.createElement('div');
    userControl.appendChild(logoutBtn);

    document.body.appendChild(userControl);
    //sessionStorage.setItem("gotoLocation", window.location);
    //window.location.href = "login.html";
}
else{
    Logout();
};

function Logout() {
    currentUser = null;
    loginPage.render(document.body);
    //sessionStorage.removeItem('currentUser');
    //return window.location.href = "login.html";
};

// let logoutBtn = document.getElementById("logoutBtn")
// if (logoutBtn) {
//     logoutBtn.addEventListener("click", Logout)
// };




module.exports = currentUser;