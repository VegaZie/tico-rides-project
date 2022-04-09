function registration(){
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('last_name').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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
    window.open("Authentication_Page.html")
};

function login(){

};