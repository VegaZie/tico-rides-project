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

    //Acá verificamos que no existan campos vacios
    if (ridename.length === 0 || start.length === 0 || end.length === 0 || description.length === 0 || timestart.length === 0 || timeend.length === 0) {
        window.alert('Por favor rellene toda la información solicitada');
    } else {
        //aca verificamos que al menos uno de los checkbox de los días este seleccionado
        if (Lunes || Martes || Miercoles || Jueves || Viernes || Sabado || Domingo) {
            let ridesregis = JSON.parse(localStorage.getItem('rides'));
            if (!ridesregis) {
                ridesregis = [];
            }
            //aca primero validamos que el ridename que ingreso el usuario no exista en ningun registro a 
            //nombre del mismo usuario
            if (!validarRideName(ridename, username)) {
                //aca construimos el nuevo ride
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
                //ingresamos el nuevo ride a la lista madre
                ridesregis.push(newride);
                //guardamos la información en el local storage
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
        //Aca usamos el find para verificar que el ridename no exista en ningún ride que este 
        //asociado al mismo usuario que crea el ride
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
    //acá recuperamos el ridename seleccionado para poder mostrarlo al usuario para que lo pueda editar
    let Ridename = localStorage.getItem('rideEdit');
    //acá recuperamos el usuario logeado
    const user = sessionStorage.getItem('user');
    let rides = JSON.parse(localStorage.getItem('rides'));

    if (rides) {
        //acá usamos el find para buscar el ride a editar seleccionado por el usuario en el dashboard
        let rideEncontrado = rides.find(ridename => ridename.ridename === Ridename && ridename.user === user);
        //si encuentra el ride lo muestra al usuario
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
    } else {
        //acá creamos una referencia a la tabla donde vamos a insertar la información
        let tabladash = document.getElementById('dashboardinformation');

        for (let i = 0; i < ridesregis.length; i++) {
            if (ridesregis[i].user === user) {
                //acá le agregamos una nueva fila al final de la tabla
                let newRideRowRef = tabladash.insertRow(-1);
                //acá seteamos un atributo junto con su valor para poder mostar el ride en editar
                newRideRowRef.setAttribute("ridename", ridesregis[i].ridename);
                let newCellRef = newRideRowRef.insertCell(0);
                newCellRef.textContent = ridesregis[i].ridename;

                newCellRef = newRideRowRef.insertCell(1);
                newCellRef.textContent = ridesregis[i].inicio;

                newCellRef = newRideRowRef.insertCell(2);
                newCellRef.textContent = ridesregis[i].fin;

                // acá creamos una referencia para añadir botones de editar y eliminar
                let newActionButton = newRideRowRef.insertCell(3);
                //acá creamos el bóton de editar y le asignamos el texto de editar
                let editButton = document.createElement("button");
                editButton.textContent = 'Editar';
                //acá creamos el bóton de eliminar y le asignamos el texto eliminar
                let deleteButton = document.createElement("button");
                deleteButton.textContent = 'Eliminar';
                //acá agregamos los botones a la celda
                newActionButton.appendChild(editButton);
                newActionButton.appendChild(deleteButton);

                //acá le creamos un evento al boton de editar para poder ir a editar la informacion
                editButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    //acá obtenemos la fila donde se le dio click al editar
                    let rideRow = event.target.parentNode.parentNode;
                    // acá obtenemos el nombre del ride de la fila seleccionada
                    let ridemaTabla = rideRow.getAttribute("ridename");
                    //seteamos el nombre al local storage para recupera el nombre en la parte de cargar
                    //lla informacion en la ventana de editar ride
                    localStorage.setItem('rideEdit', ridemaTabla);
                    window.location = "edit.html";
                });

                deleteButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    let resultado = window.confirm('¿Estas seguro que desea eliminar el ride?');
                    if (resultado === true) {
                        let rideRow = event.target.parentNode.parentNode;

                        //aca eliminamos la fila seleccionada
                        let ridemaTabla = rideRow.getAttribute("ridename");
                        rideRow.remove();
                        //acá llamamos la funcion de eliminar ride y le pasamos el nombre del ride por 
                        //parametro
                        deleteRide(ridemaTabla);
                    }

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
    //recuperamos el usuario logeado
    let user = sessionStorage.getItem('user');
    //recuperamos el nombre del ride a editar
    let ridenameEditar = localStorage.getItem('rideEdit');

    let rides = JSON.parse(localStorage.getItem('rides'));
    //buscamos el ridename asociado al usuario
    let rideEncontrado = rides.find(element => element.ridename === ridenameEditar && element.user === user);
    if (ridename.length === 0 || start.length === 0 || end.length === 0 || description.length === 0 || timestart.length === 0 || timeend.length === 0) {
        window.alert('Hay campos vacios, por favor complete la información solicitada');
    } else {
        //Validamos el ridename
        if (!validarRideNameEditar(ridename, user)) {
            //validamos que este seleccionado un checkbox
            if (Lunes || Martes || Miercoles || Jueves || Viernes || Sabado || Domingo) {
                if (rideEncontrado) {
                    //actualizamos la informacion del ride
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
            } else {
                window.alert('Debe seleccionar almenos un día');
            }

        } else {
            window.alert('El nombre del ride ya existe, por favor ingrese uno distinto');
        }
    }
}

function validarRideNameEditar(Ridename, user) {
    //acá recuperamos el ridename a editar
    let RidenameLocal = localStorage.getItem('rideEdit');

    let rides = JSON.parse(localStorage.getItem('rides'));
    if (rides) {
        //Aca usamos el find para verificar que el ridename no exista en ningún ride que este 
        //asociado al mismo usuario que crea el ride
        let ridever = rides.find(ridename => ridename.ridename === Ridename && ridename.user === user);

        if (RidenameLocal === Ridename) {
            return false
        } else {
            if (ridever) {
                return true;
            } else {
                return false;
            }
        }


    } else {
        return false;
    }
};

function deleteRide(RidenameDelete) {
    //recuperamos el usuario logeado y por parametro el ridename a eliminar
    let user = sessionStorage.getItem('user');
    let rides = JSON.parse(localStorage.getItem('rides'));
    //acá obtenemos el index del ride a eliminar
    let rideEncontrado = rides.findIndex(element => element.ridename === RidenameDelete && element.user === user);
    //mediante el index eliminamos el ride de la lista madre
    rides.splice(rideEncontrado, 1);

    localStorage.setItem("rides", JSON.stringify(rides));
    window.alert('El ride se elimino con éxito');

}