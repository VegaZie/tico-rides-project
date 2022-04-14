//funcion para eliminar el usuario logeado del session storage
function singout(){
    sessionStorage.removeItem("user");
    window.location = "index.html";
};

// Funcion para cargar el usuario en el session storage
function cargarusuario() {
    document.getElementById('userDash').innerHTML = sessionStorage.getItem('user');
};