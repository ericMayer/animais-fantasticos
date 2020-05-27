export default class NavListaAnimais {
  constructor(lista, descricao, eventos) {
    // selecionando a lista de animais
    this.animaisLista = document.querySelectorAll(lista);

    // selecionando a descrição do texto do animail
    this.animaisDescricao = document.querySelectorAll(descricao);

    this.eventos = eventos;
    this.ativo = "ativo";
  }

  // função que adiciona ativo ao item clicado
  ativou(index) {
    // removendo a classe de todos os itens
    this.animaisDescricao.forEach((item) => {
      item.classList.remove(this.ativo);
    });

    // pegando o tipo de animação que será
    const animacao = this.animaisDescricao[index].dataset.anime;

    // adicionando classe ativo no item clicado e a classa data-anime, para fazer a animação
    this.animaisDescricao[index].classList.add(this.ativo, animacao);
  }

  // adicionando evento em cada item
  addEvent() {
    this.eventos.forEach((evento) => {
      this.animaisLista.forEach((item, index) => {
        item.addEventListener(evento, () => {
          // chamando a função ativo que irá adicionar a no item clicado
          this.ativou(index);
        });
      });
    });
  }

  iniciar() {
    if (this.animaisLista.length && this.animaisDescricao.length) {
      this.ativou(0); // ativando o primeiro item
      this.addEvent();
    }
    return this;
  }
}
