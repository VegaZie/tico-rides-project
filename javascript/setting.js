function settings(){
    const Fullname = document.getElementById("fullname").value;
    const Velocidamed = document.getElementById("speed").value;
    const Aboutme = document.getElementById("about").value;
    let userlog = sessionStorage.getItem('user');

    if(Fullname === 0 || Velocidamed === 0 || Aboutme === 0){
        window.alert('Por favor rellene todos los campos');
    }else{
        let setingsregis = JSON.parse(localStorage.getItem('settings'));
        if (!setingsregis) {
            setingsregis = [];
        }
        
        let searchUsercofig = setingsregis.find(user => user.username === userlog);

        if(searchUsercofig){
            searchUsercofig.fullname = Fullname;
            searchUsercofig.velocidamed = Velocidamed;
            searchUsercofig.aboutme = Aboutme;
            localStorage.setItem("settings", JSON.stringify(setingsregis));
            window.alert('La información se actualizo con éxito');
            window.location = "dashboard.html";
        } else{
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