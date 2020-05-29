import Slide from "./slide.js";

export default class Nav extends Slide {
  // pegando as opções de navegação do slide
  // no caso os botões anterior e próximo
  opcoes(anterior, proximo) {
    this.anterior = document.querySelector(anterior);
    this.proximo = document.querySelector(proximo);

    // iniciando os eventos de navegação do slide
    // pelos botões
    this.addNavEvents();
  }

  // eventos de navegação do slide
  // pelos botões
  addNavEvents() {
    this.anterior.addEventListener("click", this.slideAnterior);
    this.proximo.addEventListener("click", this.proximoSlide);
  }
}
