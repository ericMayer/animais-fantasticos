import fora from "./clique-fora.js";

export default class DropdownMenu {
  constructor(submenu, eventos) {
    this.submenu = document.querySelectorAll(submenu);

    // caso não for passado nenhum valor para eventos
    // irá definir o valor padrão
    if (eventos === undefined) {
      this.eventos = ["touchstart", "click"];
    } else {
      this.eventos = eventos;
    }

    this.ativo = "ativo";

    // alterando referência do objeto para a classe
    this.submenuAtivo = this.submenuAtivo.bind(this);
  }

  submenuAtivo(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.toggle(this.ativo); // adicionando classe ativo ao item clicado

    fora(element, () => {
      element.classList.remove(this.ativo); // remove a classe ativo, quando clicado fora
    });
  }

  addEvent() {
    this.submenu.forEach((item) => {
      // o evento de click no browser do celular demora muito para acontecer, por isso será usado outro evento touchstart, que ocorre na hora que clicar

      this.eventos.forEach((evento) => {
        item.addEventListener(evento, this.submenuAtivo);
      });
    });
  }

  iniciar() {
    if (this.submenu.length) {
      this.addEvent();
    }
    return this;
  }
}
