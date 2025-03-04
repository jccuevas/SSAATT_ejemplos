function doLogin(event) {
    event.preventDefault();

    const data = {
        "user": document.forms.inicio.user.value,
        "password": document.forms.inicio.pass.value
    }

    console.log("Datos a enviar:" + JSON.stringify(data));

    const connection = new XMLHttpRequest();
    connection.open("POST", "http://labtelema.ujaen.es:8083/login");
    connection.onreadystatechange = function () {
        if (connection.readyState == 4) {
            //La petición ha sido completada
            switch (connection.status) {
                case 200:
                    console.log("Autenticación OK");
                    break;
                case 401:
                    alert("Error de autenticación");
                    break;
                case 500:
                    alert("Error del servidor.")
                    break;
            }
        }
    }

    connection.setRequestHeader("Content-Type", "application/json");
    connection.send(JSON.stringify(data));
}