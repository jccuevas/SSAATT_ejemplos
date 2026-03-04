var num = 2;
var parrafos = 0;

var botonVacio = document.getElementById("vacio");
botonVacio.addEventListener("click", (event) => cambiarNombre(event, "Hola"))

function cambiarNombre(event, text) {
    console.dir(event);
    event.target.innerText = text;


}
function stop(event) {
    event.preventDefault();
    let div = document.getElementById("contenedor");
    let p = document.createElement("p");

    p.setAttribute("id", "p-" + parrafos);
    p.innerText = "soy el párrafo " + parrafos;
    parrafos++;
    div.appendChild(p);

}

function getName(event) {
    event.preventDefault();
    //console.log("Leido: " + document.forms.auth.name.value + " " + document.forms.auth.surname.value);
    let formData = new FormData(document.forms.auth);

    //Lectura de los campos del formulario a in JSON
    let jsonObject = {};
    //JSON desde FormData
    for (let key of formData.keys()) {
        console.log(key + " "
            + formData.get(key));
        jsonObject[key] = formData.get(key);
    }

    //JSON con una expresión
    let json = {
        "name": document.forms.auth.name.value,
        "surname": document.forms.auth.surname.value
    }

    let jsonCadena = '{"user":"Juan Carlos","apellido":"Cuevas"}';
    console.dir(jsonObject);
    console.dir(json);
    let jsonCad;
    console.log(jsonCad);
    try {
        jsonCad = JSON.parse(jsonCadena);
        console.dir(jsonCad);
    } catch (ex) {
        console.error("Excepción: " + ex.toString());
    }



}

function propagacion(event) {
    console.log("Soy " + event.target.id);
    event.stopPropagation();

}

function cambiarTexto(texto) {
    let p = document.getElementById("texto");
    p.innerHTML = texto;

}

function crearParrafo(texto) {
    let div = document.getElementById("contenedor");
    let p = document.createElement("p");

    p.setAttribute("id", "p-" + parrafos);
    p.innerText = "soy el párrafo " + parrafos;
    parrafos++;
    div.appendChild(p);
}

function cambiar(n) {
    let s = document.getElementById("section-" + n);
    let b = document.getElementById("b-" + n);
    //let sections = document.getElementsByTagName("section");
    //let botones = document.getElementsByTagName("button");
    let botones = document.querySelectorAll("[id|=b]");
    let sections = document.querySelectorAll("[id|=section]");
    console.dir(botones);

    for (let element of sections) {
        element.classList.remove("visible");
        element.classList.add("oculta");
    };

    for (let element of botones) {
        element.classList.remove("activo");
    };

    s.classList.add("visible");
    b.classList.add("activo");
    //console.dir(sections);


}

/**
 * Esta función simula la descarga de una lista de usaurios de Internet
 * @param {*} event Objeto Event
 */
function simularDescarga(event) {
    const users = '[{"_id":"234123412c3123","name":"Juan Carlos","apellido":"Cuevas"},{"_id":"234123412c3123","name":"Antonio","apellido":"Yuste"},{"_id":"234123412c3123","name":"Manuel Ángel","apellido":"Gadeo"}]';
    let userList;//JSON con los usuarios
    try {
        userList = JSON.parse(users);
        console.dir(userList);
        let ul = document.getElementById("lista");
        if (ul != null) {
            for (let user of userList) {
                let li = document.createElement("li");
                li.innerHTML = "<b>" + user.name + "</b><br><i>" + user.surname + "</i>";
                li.classList.add("user");
                //Podemos añadir elementos que lancen eventos con referencia a los objetos descargados
                button = document.createElement("button");
                button.innerText = "❌";
                button.addEventListener("click", () => alert("Soy " + user._id));
                li.appendChild(button);
                ul.appendChild(li);
            }
        }
    } catch (ex) {
        console.error("Excepción: " + ex.toString());
    }

}

//Función que arranca el temporizador
function lanzaTemporizador(event, timeout) {

    if (confirm("¿Quieres lanzar el temporizador")) {
        let t = prompt("¿Cuánto tiempo (ms)?", timeout);
        setTimeout(() => {
            resetButton(event.target)
        }, t);
    } else {
        console.log("Temporizador no lanzado");
    }
}

function resetButton(b) {
    b.innerText = "EVENTO!!!!";
    setTimeout(() => {
        resetButton(b.innerText = "Temporizador")
    }, 2000);

}