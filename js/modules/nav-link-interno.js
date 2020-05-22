export default class NavLinksInternos {
  constructor(links, eventos, options) {
    this.linksInternos = document.querySelectorAll(links);
    this.eventos = eventos;

    if (options === undefined) {
      this.options = {
        behavior: "smooth", // transição suave
        block: "start", // vai direto para o ínicio do elemento
      };
    } else {
      this.options = options;
    }

    this.scroll = this.scroll.bind(this); // alterando a referência do this do método scroll para o this da classe
  }

  scroll(event) {
    event.preventDefault();

    // pegando o href do link interno clicado
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href); // o href é o mesmo nome da section

    // fazendo o scrool para ir para outra parte da página
    section.scrollIntoView(this.options);
  }

  addEvent() {
    this.eventos.forEach((evento) => {
      this.linksInternos.forEach((link) => {
        // fazendo o forEach pela nodeList
        link.addEventListener(evento, this.scroll); // adicionando o evento de clik em cada item e chamando a função scroll
      });
    });
  }

  iniciar() {
    // caso tenha algum link interno
    if (this.linksInternos.length) {
      this.addEvent();
    }
    return this; // retornando this para poder usar outros métodos da classe, depois de usar o iniciar
  }
}
