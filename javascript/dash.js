function singout(){
    sessionStorage.removeItem("user");
    window.location = "Authentication_Page.html";
};

function cargarusuario() {
    document.getElementById('userDash').innerHTML = sessionStorage.getItem('user');
};