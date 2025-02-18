let boton = document.getElementById("botonCrear")
boton.addEventListener("click", crearParrafo)
const datos = '[{ "_id": "65a8ead6251befc5cb0d3bc2", "user": "usuario", "title": "Entrada 1", "date": "2024-03-01", "comment": "Esta es una entrada del blog" }, { "_id": "65a8eaea251befc5cb0d3bc3", "user": "usuario", "title": "Entrada 2", "date": "2024-01 - 18", "comment": "Esta es otra entrada del blog" }, { "_id": "66163c2ae5230f36fbcee0b4", "user": "usuario", "title": "Entrada 4", "date": "2024-04 - 10", "comment": "Son ya tres las entradas en el blog" }, { "_id": "66163c3ce5230f36fbcee0b5", "user": "usuario", "title": "Entrada 4", "date": "2024-04 - 10", "comment": "Son ya cuatro las entradas en el blog" }, { "_id": "66163c50e5230f36fbcee0b6", "user": "usuario", "title": "Entrada 5", "date": "2024-04 - 10", "comment": "Son ya cinco las entradas en el blog" }]'

function crearParrafo() {
    let ul = document.getElementById("texto");
    ul.innerHTML = "";
    try {
        const entradas = JSON.parse(datos)
        for (let entrada of entradas) {
            ul.appendChild(crearLi(entrada))
        }
    }
    catch (error) {
        console.error("Error: " + error)
    }
}

function creaLi(entrada) {
    let li = document.createElement("li")
    let title = document.createElement("strong")
    let date = document.createElement("i")
    let comment = document.createElement("p")
    let button = document.createElement("button")
    li.setAttribute("id", entrada._id)
    title.innerText = entrada.title
    date.innerText = " [" + entrada.date + "]"
    comment.innerText = entrada.comment
    button.innerText = "Enviar"
    button.addEventListener("click", () => borraElemento(entrada._id))

    li.append(title, date, comment, button)
    return li
}

function borraElemento(id) {
    let borrar = document.getElementById(id);
    borrar.remove();

}