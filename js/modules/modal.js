export default class Modal {
  constructor(login, fechar, container, button, eventos) {
    // selecionando elementos do modal
    this.login = document.querySelector(login);
    this.fechar = document.querySelector(fechar);
    this.container = document.querySelector(container);
    this.button = document.querySelector(button);
    this.eventos = eventos;

    // alterando this do toogle ativo para referenciar a classe
    this.toogleEvent = this.toogleEvent.bind(this);

    // alterando referência do this do elemento clicado para a referência da classe
    this.clicouFora = this.clicouFora.bind(this);
  }

  toggleAtivo() {
    this.container.classList.toggle("ativo"); // adicionando classe ativo para animar e aparecer a tela de login, caso não exista, se existir será removida
  }

  toogleEvent(event) {
    event.preventDefault(); // prevenindo padrão, assim não irá tentar abrir o link
    this.toggleAtivo(); // chamado método responsável por adicionar classe ativo no modal
  }

  clicouFora(event) {
    if (event.target === this.container) {
      this.toggleAtivo(); // chamado função que remove a classe ativo, toogle remove, porquê para primeiro abrir o modal é necessário adicionar a classe, então quando chamado o método de novo irá remover a classe já adicionada
    }
  }

  addEvent() {
    // quando clicado no link de login irá chamar a função ativo
    this.eventos.forEach((evento) => {
      this.login.addEventListener(evento, this.toogleEvent);
    });

    // quando clicado no botão de fechar será chamado a função remover
    this.eventos.forEach((evento) => {
      this.fechar.addEventListener(evento, this.toogleEvent);
    });

    // quando clicado fora do modal será chamado a função clicouFora
    this.eventos.forEach((evento) => {
      this.container.addEventListener(evento, this.clicouFora);
    });

    // quando clicado botão login será prevenido o padrão para não dar erro
    this.eventos.forEach((evento) => {
      this.button.addEventListener(evento, (event) => {
        event.preventDefault();
      });
    });
  }

  iniciar() {
    if (this.login && this.fechar && this.container && this.button) {
      this.addEvent(); // iniciando eventos
    }
    return this; // retornando this para não ser undefined e ser possível encadeiar funções com .
  }
}
