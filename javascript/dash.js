function singout(){
    sessionStorage.removeItem("user");
    window.location = "index.html";
};

function cargarusuario() {
    document.getElementById('userDash').innerHTML = sessionStorage.getItem('user');
};