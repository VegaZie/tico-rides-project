function registration(){
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('last_name').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repPassword = document.getElementById('passwordrepeat').value;

    if(name.length === 0 || lastname.length === 0 || phone.length === 0 || username === 0 || password.length === 0){
        window.alert('¡Se detectaron campos vacios, por favor llene todos los campos!');
    }else{
        if(!validarUserName(username)){
            if(password === repPassword){
                let userRegister = JSON.parse(localStorage.getItem('usersRegistred'));
                if (!userRegister) {
                    userRegister = [];
                }
            
                const newUser = {
                    name: name,
                    lastname: lastname,
                    phone: phone,
                    username: username,
                    password: password
                };
                
                userRegister.push(newUser);
                localStorage.setItem("usersRegistred", JSON.stringify(userRegister));
                window.location = "Authentication_Page.html";
            }else{
                window.alert('Por favor verifique que las contraseñas sean iguales');
            }
        }else{
            window.alert('El username no es valido, por ingrese uno distinto');
        }
    }
};

function validarUserName(usernamer){
    let userRegister = JSON.parse(localStorage.getItem('usersRegistred'));
    if (userRegister) {
        let usern = userRegister.find(username => username.username === usernamer);

        if (usern) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function login(){

};