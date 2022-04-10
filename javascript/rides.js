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
        } else {
            window.alert('Debe seleccionar almenos un día');
        }
    }
};