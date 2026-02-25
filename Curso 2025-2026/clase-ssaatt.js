var num = 2;
var parrafos = 0;

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
    let s = document.getElementById("s-" + n);
    let b = document.getElementById("b-" + n);
    let sections = document.getElementsByTagName("section");
    let botones = document.getElementsByTagName("button");

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