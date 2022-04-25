function registration(){
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('last_name').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repPassword = document.getElementById('passwordrepeat').value;

    //verificamos que ningun campo venga vacio
    if(name.length === 0 || lastname.length === 0 || phone.length === 0 || username === 0 || password.length === 0){
        window.alert('¡Se detectaron campos vacios, por favor llene todos los campos!');
    }else{
        //aqui mandamos a validar que el username no exista en el local storage
        if(!validarUserName(username)){
            //verificamos que los campos de password sean iguales
            if(password === repPassword){
                //Aqui recuperamos la informacion guardada en el local storage
                let userRegister = JSON.parse(localStorage.getItem('usersRegistred'));
                //si no existe información inicialisamos la lista para agregar registros
                if (!userRegister) {
                    userRegister = [];
                }
                // aqui creamos al usuario para registrarlo
                const newUser = {
                    name: name,
                    lastname: lastname,
                    phone: phone,
                    username: username,
                    password: password
                };
                //cuando se crea el usuario le realizamos un push a la lista madre
                userRegister.push(newUser);
                //Una vez realizado el push registramos la información en el local storage y le abrimos
                //la página de autentificación
                localStorage.setItem("usersRegistred", JSON.stringify(userRegister));
                window.alert('Usuario registrado con éxito');
                window.location = "Authentication_Page.html";
            }else{
                window.alert('Por favor verifique que las contraseñas sean iguales');
            }
        }else{
            window.alert('El username no es valido, por ingrese uno distinto');
        }
    }
};
//Funcion para validar que no existan usernames iguales
function validarUserName(usernamer){
    let userRegister = JSON.parse(localStorage.getItem('usersRegistred'));
    //aca validamos que haya información registrada
    if (userRegister) {
        //mediante el find buscamos si existe algun username igual al que ingreso el usuario al registro
        let usern = userRegister.find(username => username.username === usernamer);
        //Si encontro un usuario con el mismo nombre devuelve un true por lo que el username ya existe
        //en caso contrario devuelve un false
        if (usern) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
