
export default class LoginControl {
    constructor(database) {
        function Login() {
            var login = document.getElementById("login");
            var pass = document.getElementById("password");

            var person = database.persons.find((x) => x.login == login.value && x.password == pass.value);
            if (!person) {
                alert("Wrong login/pass");
                pass.value = "";
                return false;
            } else {

                sessionStorage.setItem('personid', person.id)
                return window.location.href = "index.html";
            } 
        }

        this.render = function () {
            require('../scss/login.scss');
            document.body.innerHTML = require("html-loader!../html/login.html");
            let loginBtn = document.getElementById("loginBtn");
            loginBtn.addEventListener("click", Login);
        }

    }
}
