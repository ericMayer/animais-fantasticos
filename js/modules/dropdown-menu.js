import fora from "./clique-fora.js";

export default function dropdown() {
  const submenu = document.querySelectorAll('[data-dropdown="menu"');
  const eventos = ["touchstart", "click"];

  const ativo = (event, element) => {
    event.preventDefault();

    element.classList.toggle("ativo"); // adicionando classe ativo ao item clicado

    fora(element, () => {
      element.classList.remove("ativo"); // remove a classe ativo, quando clicado fora
    });
  };

  submenu.forEach((item) => {
    // o evento de click no browser do celular demora muito para acontecer, por isso será usado outro evento touchstart, que ocorre na hora que clicar

    eventos.forEach((evento) => {
      item.addEventListener(evento, (event) => {
        ativo(event, item);
      });
    });
  });
}
