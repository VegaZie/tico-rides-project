function login() {
    const usernameL = document.getElementById('username').value;
    const passwordL = document.getElementById('passworduser').value;
    const userRegister = JSON.parse(localStorage.getItem('usersRegistred'));
    // se verifica que existan registros guardados
    if (userRegister){
        // aqui buscamos mediante un find el usuario y si contraseña para verificar el ingreso
        let userLog = userRegister.find(user => user.username === usernameL && user.password === passwordL);
        //aca le damos acceso al dashboard si la informacion es correcta
        if(userLog){
            //Aca cargamos el usuario en el session storage para saber que esta logeado
            sessionStorage.setItem("user", usernameL);
            window.location = "dashboard.html";
        }else{
            //aca le indicamos que el usuario o la contraseña no son validos
            window.alert("El usuario no existe o la contraseña es incorrecta");
        }
        
    }else {
        //aca indicamos que no existen usuarios registrados
        window.alert("No existen usuarios registrados");
    }
};