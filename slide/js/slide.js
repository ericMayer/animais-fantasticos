import debounceScroll from "../../js/modules/debounce.js";

export default class Slide {
  constructor(container, slide) {
    this.container = document.querySelector(container);
    this.slide = document.querySelector(slide);
  }

  mouseDown(event) {
    // prevenindo padrão para não ficar arrastando a imagem
    event.preventDefault();
    console.log("clicou");

    // adicionando evento de mousemove, qunado foi clicado
    // para arrastar
    this.container.addEventListener("mousemove", this.mouseMove);
  }

  // método quando o mouse é movido
  mouseMove() {}

  // quando o mouse não estiver mais clicado
  // será removido o evento de mousemove
  mouseUp() {
    this.container.removeEventListener("mousemove", this.mouseMove);
  }

  // alterando referências dos this dos eventos
  referencias() {
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }

  addEvents() {
    // evento de click e arrastar do mouse
    this.container.addEventListener("mousedown", this.mouseDown);
    // evento de quando o mouse deixa de estar clicado
    this.container.addEventListener("mouseup", this.mouseUp);
  }

  iniciar() {
    this.referencias();
    this.addEvents();
    return this;
  }
}
