function addride() {
    const ridename = document.getElementById('ridename').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const description = document.getElementById('description').value;
    const timestart = document.getElementById('salida').value;
    const timeend = document.getElementById('llegada').value;
    let Lunes = document.getElementById('Lune').checked;
    let Martes = document.getElementById('mart').checked;
    let Miercoles = document.getElementById('Mier').checked;
    let Jueves = document.getElementById('Juev').checked;
    let Viernes = document.getElementById('Vier').checked;
    let Sabado = document.getElementById('Saba').checked;
    let Domingo = document.getElementById('Domi').checked;
    const username = sessionStorage.getItem('user');

    if (ridename.length === 0 || start.length === 0 || end.length === 0 || description.length === 0 || timestart.length === 0 || timeend.length === 0) {
        window.alert('Por favor rellene toda la información solicitada');
    } else {
        if (Lunes || Martes || Miercoles || Jueves || Viernes || Sabado || Domingo) {
            let ridesregis = JSON.parse(localStorage.getItem('rides'));
            if (!ridesregis) {
                ridesregis = [];
            }
            if (!validarRideName(ridename, username)) {
                const newride = {
                    ridename: ridename,
                    inicio: start,
                    fin: end,
                    descripcion: description,
                    horasalida: timestart,
                    horallegada: timeend,
                    lunes: Lunes,
                    martes: Martes,
                    miercoles: Miercoles,
                    jueves: Jueves,
                    viernes: Viernes,
                    sabado: Sabado,
                    domingo: Domingo,
                    user: username
                }
                ridesregis.push(newride);
                localStorage.setItem("rides", JSON.stringify(ridesregis));
                window.location = "dashboard.html";
            }
            else {
                window.alert('El nombre del ride ya existe, por favor ingrese uno distinto');
            }

        } else {
            window.alert('Debe seleccionar almenos un día');
        }
    }
};

function validarRideName(Ridename, user) {
    let rides = JSON.parse(localStorage.getItem('rides'));
    if (rides) {
        let ridever = rides.find(ridename => ridename.ridename === Ridename && ridename.user === user);

        if (ridever) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function cargarRide(Ridename) {
    const user = sessionStorage.getItem('user');
    let rides = JSON.parse(localStorage.getItem('rides'));

    if (rides) {
        let rideEncontrado = rides.find(ridename => ridename.ridename === Ridename && ridename.user === user);

        if (rideEncontrado) {
            document.getElementById('ridename').value = rideEncontrado.ridename;
            document.getElementById('start').value = rideEncontrado.inicio;
            document.getElementById('end').value = rideEncontrado.fin;
            document.getElementById('description').innerHTML = rideEncontrado.descripcion;
            document.getElementById('horasalida').value = rideEncontrado.horasalida;
            document.getElementById('horallegada').value = rideEncontrado.horallegada;

            document.getElementById('Lune').checked = rideEncontrado.lunes;
            document.getElementById('mart').checked = rideEncontrado.martes;
            document.getElementById('Mier').checked = rideEncontrado.miercoles;
            document.getElementById('Juev').checked = rideEncontrado.jueves;
            document.getElementById('Vier').checked = rideEncontrado.viernes;
            document.getElementById('Saba').checked = rideEncontrado.sabado;
            document.getElementById('Domi').checked = rideEncontrado.domingo;

        } else {
            window.alert('No se encontro la información');
        }
    }
}

function editride() {

}