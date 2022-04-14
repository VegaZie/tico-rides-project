function mostarRides() {
    let ridesregis = JSON.parse(localStorage.getItem('rides'));
    if (!ridesregis) {

    } else {
        let tabladash = document.getElementById('TablaPrin');
        for (let i = 0; i < ridesregis.length; i++) {
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

function buscarRide() {
    const desde = document.getElementById('desde').value;
    const hasta = document.getElementById('hasta').value;
    if (desde.length === 0 || hasta.length === 0) {
        window.alert('Un campo se encuenta vacio, por favor ingrese información');
    } else {
        let ridesregis = JSON.parse(localStorage.getItem('rides'));
        if (!ridesregis) {

        } else {
            let numeroFilas = document.getElementById('TablaPrin').getElementsByTagName('tr').length - 1;
            for(let i = 0; i < numeroFilas; i++){
                document.getElementById('TablaPrin').deleteRow(1);
            }
            let tabladash = document.getElementById('TablaPrin');
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
                    contador = contador + 1;
                } else {

                }
            }
            if(contador === 0){
                window.alert('No se encontro ningun ride');
                mostarRides();
            }
        }
    }

};