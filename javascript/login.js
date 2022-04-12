const emailprueba = "david";
const passPrueba = "1234";

function login() {
    const usernameL = document.getElementById('username').value;
    const passwordL = document.getElementById('passworduser').value;
    const userRegister = JSON.parse(localStorage.getItem('usersRegistred'));

    if (userRegister){
        let userLog = userRegister.find(user => user.username === usernameL && user.password === passwordL);
        if(userLog){
            sessionStorage.setItem("user", usernameL);
            window.location = "dashboard.html";
        }else{
            window.alert("El usuario no existe o la contraseña es incorrecta");
        }
        
    }else {
        window.alert("No existen usuarios registrados");
    }
};