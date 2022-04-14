//funcion para mostar todos los rides
function mostarRides() {
    let ridesregis = JSON.parse(localStorage.getItem('rides'));
    if (!ridesregis) {

    } else {
        //aqui referenciamos la tabla del index donde cargaremos los datos
        let tabladash = document.getElementById('TablaPrin');

        for (let i = 0; i < ridesregis.length; i++) {
            //Aqui insertamos una nueva fila al final(-1) de la tabla 
            let newRideRowRef = tabladash.insertRow(-1);

            //Aqui le seteamos la informacion en las celdas de la nueva fila
            let newCellRef = newRideRowRef.insertCell(0);
            newCellRef.textContent = ridesregis[i].user;

            newCellRef = newRideRowRef.insertCell(1);
            newCellRef.textContent = ridesregis[i].ridename;

            newCellRef = newRideRowRef.insertCell(2);
            newCellRef.textContent = ridesregis[i].descripcion;

            newCellRef = newRideRowRef.insertCell(3);
            newCellRef.textContent = ridesregis[i].inicio;

            newCellRef = newRideRowRef.insertCell(4);
            newCellRef.textContent = ridesregis[i].fin;

            newCellRef = newRideRowRef.insertCell(5);
            newCellRef.textContent = ridesregis[i].horasalida;

            newCellRef = newRideRowRef.insertCell(6);
            newCellRef.textContent = ridesregis[i].horallegada;

            //Aquí creamos un string para concatenar los dias en los que ride esta activo
            let dias = '';
            if (ridesregis[i].lunes) {
                dias = 'Lunes '
            }
            if (ridesregis[i].martes) {
                dias = dias + 'Martes  '
            }
            if (ridesregis[i].miercoles) {
                dias = dias + 'Miércoles  '
            }
            if (ridesregis[i].jueves) {
                dias = dias + 'Jueves  '
            }
            if (ridesregis[i].viernes) {
                dias = dias + 'Viernes  '
            }
            if (ridesregis[i].sabado) {
                dias = dias + 'Sábado  '
            }
            if (ridesregis[i].Domingo) {
                dias = dias + 'Domingo'
            }

            newCellRef = newRideRowRef.insertCell(7);
            newCellRef.textContent = dias;
        }
    }
};

//Funcion para buscar ride desde hasta
function buscarRide() {

    const desde = document.getElementById('desde').value;
    const hasta = document.getElementById('hasta').value;
    //Validacion de que los campos no esten vacios
    if (desde.length === 0 || hasta.length === 0) {
        window.alert('Un campo se encuenta vacio, por favor ingrese información');
    } else {
        let ridesregis = JSON.parse(localStorage.getItem('rides'));
        if (!ridesregis) {

        } else {
            //--------------------------------------------------------------------------------------------
            //Aqui obtenemos el número de filas que tiene la tabla para eliminarlos y cargar la informacion buscada
            let numeroFilas = document.getElementById('TablaPrin').getElementsByTagName('tr').length - 1;
            for(let i = 0; i < numeroFilas; i++){
                //aqui eliminamos la fila 1 de la tabla cada vez que el for este en ciclo
                document.getElementById('TablaPrin').deleteRow(1);
            }
            //--------------------------------------------------------------------------------------------
            let tabladash = document.getElementById('TablaPrin');

            //creamos un contador para saber si se encuentra informacion deseada por el usuario
            //para poder saber si le mostramos un mensaje de que no hay informacion y volver 
            //a cargar todos los rides nuevamente
            let contador = 0;
            for (let i = 0; i < ridesregis.length; i++) {
                if (ridesregis[i].inicio.toLowerCase() === desde.toLowerCase() && ridesregis[i].fin.toLowerCase() === hasta.toLowerCase()) {
                    let newRideRowRef = tabladash.insertRow(-1);

                    let newCellRef = newRideRowRef.insertCell(0);
                    newCellRef.textContent = ridesregis[i].user;

                    newCellRef = newRideRowRef.insertCell(1);
                    newCellRef.textContent = ridesregis[i].ridename;

                    newCellRef = newRideRowRef.insertCell(2);
                    newCellRef.textContent = ridesregis[i].descripcion;

                    newCellRef = newRideRowRef.insertCell(3);
                    newCellRef.textContent = ridesregis[i].inicio;

                    newCellRef = newRideRowRef.insertCell(4);
                    newCellRef.textContent = ridesregis[i].fin;

                    newCellRef = newRideRowRef.insertCell(5);
                    newCellRef.textContent = ridesregis[i].horasalida;

                    newCellRef = newRideRowRef.insertCell(6);
                    newCellRef.textContent = ridesregis[i].horallegada;

                    //Aquí creamos un string para concatenar los dias en los que ride esta activo
                    let dias = '';
                    if (ridesregis[i].lunes) {
                        dias = 'Lunes '
                    }
                    if (ridesregis[i].martes) {
                        dias = dias + 'Martes  '
                    }
                    if (ridesregis[i].miercoles) {
                        dias = dias + 'Miércoles  '
                    }
                    if (ridesregis[i].jueves) {
                        dias = dias + 'Jueves  '
                    }
                    if (ridesregis[i].viernes) {
                        dias = dias + 'Viernes  '
                    }
                    if (ridesregis[i].sabado) {
                        dias = dias + 'Sábado  '
                    }
                    if (ridesregis[i].Domingo) {
                        dias = dias + 'Domingo'
                    }

                    newCellRef = newRideRowRef.insertCell(7);
                    newCellRef.textContent = dias;
                    //Aqui le sumamos para indicar que se encontro y cargo informacion en la tabla
                    contador = contador + 1;
                } else {

                }
            }
            //Aca validamos el contador 
            if(contador === 0){
                window.alert('No se encontro ningun ride');
                mostarRides();
            }
        }
    }

};