function settings(){
    const Fullname = document.getElementById("fullname").value;
    const Velocidamed = document.getElementById("speed").value;
    const Aboutme = document.getElementById("about").value;
    let userlog = sessionStorage.getItem('user');
    //verificamos que ningun campo vacio
    if(Fullname === 0 || Velocidamed === 0 || Aboutme === 0){
        window.alert('Por favor rellene todos los campos');
    }else{
        //rescatomos todos los registros para verificar  si exiten
        let setingsregis = JSON.parse(localStorage.getItem('settings'));
        //si no existen inicializaciamos a lista madre
        if (!setingsregis) {
            setingsregis = [];
        }
        
        //Buscamos en los registros si el usuario tiene configuraciones guardadas para saber si va a ingresar
        //información por primera vez o si previamente ya tenía informacion guardada para mostrarsela en los
        //campos y pueda editarla
        let searchUsercofig = setingsregis.find(user => user.username === userlog);

        //si el usuario ya tenia informacion guardada en acá la actializamos
        if(searchUsercofig){
            searchUsercofig.fullname = Fullname;
            searchUsercofig.velocidamed = Velocidamed;
            searchUsercofig.aboutme = Aboutme;
            localStorage.setItem("settings", JSON.stringify(setingsregis));
            window.alert('La información se actualizo con éxito');
            window.location = "dashboard.html";
        } else{
            //si es la primera vez del usuario creamos su configuración por primera vez
            const newseting = {
                fullname: Fullname,
                velocidamed: Velocidamed,
                aboutme: Aboutme,
                username: userlog
            }
            setingsregis.push(newseting);
            localStorage.setItem("settings", JSON.stringify(setingsregis));
            window.alert('La información se guardo con éxito');
            window.location = "dashboard.html";
        }
    }
};

//Acá le mostramos la informacion al usuario en caso de ya tener informacion guardada
//esta funcion se ejecuta mediante el onload de la página de configuraciones
function cargarinfo() {
    let userlog = sessionStorage.getItem('user');

    let setingsregis = JSON.parse(localStorage.getItem('settings'));
        if (!setingsregis) {
            setingsregis = [];
        }
        
        let searchUsercofig = setingsregis.find(user => user.username === userlog);

        if(searchUsercofig){
            document.getElementById("fullname").value = searchUsercofig.fullname;
            document.getElementById("speed").value = searchUsercofig.velocidamed;
            document.getElementById("about").innerHTML = searchUsercofig.aboutme;
        } else{
            window.alert('Este usuario no tiene información guardada');
        }
}