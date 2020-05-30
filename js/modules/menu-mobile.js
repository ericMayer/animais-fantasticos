import fora from "./clique-fora.js";

export default class MenuMobile {
  constructor(menuCelular, menuList, eventos) {
    this.menuCelular = document.querySelector(menuCelular);
    this.menuList = document.querySelector(menuList);

    // se eventos não for passado nada, usará o valor padrão
    if (eventos === undefined) {
      this.eventos = ["touchstart", "click"];
    } else {
      this.eventos = eventos;
    }

    // alterando referência do this para a referência da classe
    this.abrirMenu = this.abrirMenu.bind(this);
  }

  // quando for clicado no menu
  // irá adicionar a classe ativo,
  // caso já exista, será removida
  // depois será usado a função que
  // irá remover a da classe ativo,
  // quando for clicado fora
  abrirMenu(event) {
    // por padrão no mobile, é tentado
    // emular o evento de click
    // então quando é tocado na tela, está
    // acontecendo dois eventos, o de touchstart e de click
    // sendo assim o menu abre e fecha, ao prevenir o padrão
    // no mobile por padrão quando é prevenido o padrão
    // do touchstart ele impede que ocorra o click
    // isso em todas é um padrão do touchstart
    // em todas as plataformas (navegadores)
    event.preventDefault();

    this.menuCelular.classList.toggle("ativo");
    this.menuList.classList.toggle("ativo");

    fora(this.menuList, () => {
      // quando for clicado fora do menuList será removido as classes
      this.menuCelular.classList.remove("ativo");
      this.menuList.classList.remove("ativo");
    });
  }

  // adicionando eventos
  addEvent() {
    this.eventos.forEach((evento) => {
      // adicionando eventos ao menuCelular
      this.menuCelular.addEventListener(evento, this.abrirMenu);
    });
  }

  // chamando método que adiciona eventos,
  // caso seja verdadeiro o if
  // depois é retornado o this, para ser possível usar
  // outro método depois do this
  iniciar() {
    if (this.menuCelular && this.menuList) {
      this.addEvent();
    }
    return this;
  }
}
