/*Este script se emplea en dom.html*/

var activeSection = 1;

function getSection(event, n) {
  let sections = document.querySelectorAll("[id|='section']");

  let section = document.getElementById("section-" + n);
  //let active = document.getElementById("section-" + activeSection);
  if (sections === null || section === null) {
    console.error("No he obtenido main");
  } else {
    console.log(sections);
    for (let s of sections) {
      //s.style.display = "none";
      s.classList.add("hidden");
    }

    //Se busca el elemento que tiene la clase activeMenu para quitarsela
    let link = document.querySelector("[class='activeMenu']");
    if (link !== null) {
      link.classList.remove("activeMenu");
    }
    //Se elimina la clase hidden para que se muestre la sección
    section.classList.remove("hidden");
    //Al elemento que ha lanzado el evento se le pone la clase activeMenu
    event.target.classList.add("activeMenu");
  }
}
