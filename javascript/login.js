const emailprueba = "david";
const passPrueba = "1234";

function login() {
    const usernameL = document.getElementById('email').value;
    const passwordL = document.getElementById('passworduser').value;
    const userRegister = JSON.parse(localStorage.getItem('usersRegistred'));

    if (userRegister){
        let userLog = userRegister.find(user => user.username === usernameL && user.password === passwordL);
        if(userLog){
            window.location = "dashboard.html";
        }else{
            window.alert("El usuario no existe");
        }
        
    }else {
        window.alert("No existen usuarios registrados");
    }
};