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

function cargarRide() {
    let Ridename = localStorage.getItem('rideEdit');
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
};

function cargarDashboard() {
    let ridesregis = JSON.parse(localStorage.getItem('rides'));
    let user = sessionStorage.getItem('user');
    if (!ridesregis) {
        window.alert('No se encontro la información de los rides para mostar, por favor agregue un ride');
    } else {
        let tabladash = document.getElementById('dashboardinformation');

        for (let i = 0; i < ridesregis.length; i++) {
            if (ridesregis[i].user === user) {
                let newRideRowRef = tabladash.insertRow(-1);

                newRideRowRef.setAttribute("ridename", ridesregis[i].ridename);
                let newCellRef = newRideRowRef.insertCell(0);
                newCellRef.textContent = ridesregis[i].ridename;

                newCellRef = newRideRowRef.insertCell(1);
                newCellRef.textContent = ridesregis[i].inicio;

                newCellRef = newRideRowRef.insertCell(2);
                newCellRef.textContent = ridesregis[i].fin;

                let newActionButton = newRideRowRef.insertCell(3);

                let editButton = document.createElement("button");
                editButton.textContent = 'Editar';

                let deleteButton = document.createElement("button");
                deleteButton.textContent = 'Eliminar';

                newActionButton.appendChild(editButton);
                newActionButton.appendChild(deleteButton);

                editButton.addEventListener("click", (event) => {
                    let rideRow = event.target.parentNode.parentNode;

                    let ridemaTabla = rideRow.getAttribute("ridename");
                    localStorage.setItem('rideEdit', ridemaTabla);
                    window.location = "edit.html";
                });

                deleteButton.addEventListener("click", (event) => {
                    let rideRow = event.target.parentNode.parentNode;

                    let ridemaTabla = rideRow.getAttribute("ridename");
                    rideRow.remove();

                    //Aqui va la funcion de eliminar

                });
            }
        }

    }
};

function editride() {
    const ridename = document.getElementById('ridename').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const description = document.getElementById('description').value;
    const timestart = document.getElementById('horasalida').value;
    const timeend = document.getElementById('horallegada').value;
    let Lunes = document.getElementById('Lune').checked;
    let Martes = document.getElementById('mart').checked;
    let Miercoles = document.getElementById('Mier').checked;
    let Jueves = document.getElementById('Juev').checked;
    let Viernes = document.getElementById('Vier').checked;
    let Sabado = document.getElementById('Saba').checked;
    let Domingo = document.getElementById('Domi').checked;

    let user = sessionStorage.getItem('user');

    let ridenameEditar = localStorage.getItem('rideEdit');

    let rides = JSON.parse(localStorage.getItem('rides'));

    let rideEncontrado = rides.find(element => element.ridename === ridenameEditar && element.user === user);

    if(rideEncontrado){
        rideEncontrado.ridename = ridename;
        rideEncontrado.inicio = start;
        rideEncontrado.fin = end;
        rideEncontrado.descripcion = description;
        rideEncontrado.horasalida = timestart;
        rideEncontrado.horallegada = timeend;
        rideEncontrado.lunes = Lunes;
        rideEncontrado.martes = Martes;
        rideEncontrado.miercoles = Miercoles;
        rideEncontrado.jueves = Jueves;
        rideEncontrado.viernes = Viernes;
        rideEncontrado.sabado = Sabado;
        rideEncontrado.domingo = Domingo;
        localStorage.setItem("rides", JSON.stringify(rides));
        window.alert('La información se guardo con éxito');
        window.location = "dashboard.html";
    }

}