const emailprueba = "david";
const passPrueba = "1234";

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('passworduser').value;

    if (email === emailprueba && password === passPrueba){
        window.location = "dashboard.html";
    }else {
        window.alert("El usuario no existe");
    }
};