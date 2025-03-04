/* Este script se emplea en dom.html */

/* Le añadimos un evento a un botón a través del DOM */
let boton = document.getElementById("botonCrear");
const userName = document.getElementById("usuario");
boton.addEventListener("click", () => getLista(userName.value)); //Añadimos un evento click al botón que llama la función crearElemento

const SERVER = "http://labtelema.ujaen.es:8083";

function getLista(user) {
    const c = new XMLHttpRequest();
    c.open("GET", SERVER + "/blog/" + user);
    c.onreadystatechange = function () {
        if (c.readyState == 4) {
            if (c.status == 200) {
                console.log("Descargados: " + JSON.parse(c.responseText))
                crearElemento(c.responseText);
            } else {
                console.error("Error al obtener la lista");
            }
        }
    }
    c.send();
}

//Datos de ejemplo cargados de un servicio web
const datos =
    '[ "_id": "65a8ead6251befc5cb0d3bc2", "user": "usuario", "title": "Entrada 1", "date": "2024-03-01", "comment": "Esta es una entrada del blog" }, { "_id": "65a8eaea251befc5cb0d3bc3", "user": "usuario", "title": "Entrada 2", "date": "2024-01 - 18", "comment": "Esta es otra entrada del blog" }, { "_id": "66163c2ae5230f36fbcee0b4", "user": "usuario", "title": "Entrada 4", "date": "2024-04 - 10", "comment": "Son ya tres las entradas en el blog" }, { "_id": "66163c3ce5230f36fbcee0b5", "user": "usuario", "title": "Entrada 4", "date": "2024-04 - 10", "comment": "Son ya cuatro las entradas en el blog" }, { "_id": "66163c50e5230f36fbcee0b6", "user": "usuario", "title": "Entrada 5", "date": "2024-04 - 10", "comment": "Son ya cinco las entradas en el blog" }]';

function crearElemento(datos) {
    let ul = document.getElementById("texto");
    ul.innerHTML = "";
    //Encerramos la llamada a JSON.parse en un try-catch para capturar errores de sintaxis del JSON
    // Ejercicio: quite una llave del JSON y observe el error en la consola.
    try {
        const entradas = JSON.parse(datos);
        for (let entrada of entradas) {
            ul.appendChild(creaLi(entrada));
        }
    } catch (error) {
        //Si hay un error en el JSON, lo capturamos y lo mostramos en la consola
        //Si el error es de sintaxis, error será un objeto SyntaxError, y se puede comprobar con instanceof
        if (error instanceof SyntaxError) {
            console.error("Error en el JSON: " + error);
            //A veces los errores tienen que mostrarse, ponemos usar alert(error) para mostrar el error
            //o incluso mostrar un mensaje en el HTML creando un elemento y añadiéndolo al DOM
            // Descomentar la siguiente línea para mostrar un alert con el error
            //   alert("Error en el JSON: " + error);
            //Se ha creado un div en el HTML para mostrar los errores con un estilo específico

            let errorDiv = document.getElementById("error");
            errorDiv.innerText = "Error en el JSON: " + error;
            //El código anterior muestra el mensaje, pero hace que el div siga visible:
            //Para ocultarlo después de un tiempo, se puede usar un setTimeout para lanzar un evento tras unos segundos
            //y quitar el contenido del div o hacerlo invisible con un estilo, por ejemplo:
            setTimeout(() => {
                errorDiv.innerText = "";
            }, 3000); //Se ejecuta la función tras 3 segundos
            //De nuevo, se debe emplear una función flecha para que el evento se dispare tras el tiempo indicado
        } else {
            console.error("Error: " + error);
        }
    }
}

/* Función que crea un elemento de la lista
Debemos evitar crear funciones que realicen varias operaciones,
por eso sacamos esta función fuera de crearElemento */
function creaLi(entrada) {
    let li = document.createElement("li");
    let title = document.createElement("strong");
    let date = document.createElement("i");
    let comment = document.createElement("p");
    let button = document.createElement("button");
    li.setAttribute("id", entrada._id);
    title.innerText = entrada.title;
    date.innerText = " [" + entrada.date + "]";
    comment.innerText = entrada.comment;
    button.innerText = "Enviar";
    button.addEventListener("click", () => borraElemento(entrada._id)); //Introducimos el evento a través de una función flecha
    // Si no se usa una función flecha, el evento se dispara en el momento de la creación del botón
    // También podría haberse a través de una función anónima:
    //button.addEventListener("click", function () { borraElemento(entrada._id); });

    li.append(title, date, comment, button); //Añadimos los elementos al li
    return li;
}

function borraElemento(id) {
    let borrar = document.getElementById(id);
    borrar.remove();
}
