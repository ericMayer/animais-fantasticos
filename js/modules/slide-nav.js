import Slide from "./slide.js";

export default class SlideNav extends Slide {
  // extendendo o constructor da classe pai
  // e adicionado novas funcionalidades no constructor
  constructor(container, slide) {
    super(container, slide);
    // iniciando alteração de referências dos callback
    this.referenciasPaginacao();
  }

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

  // método responsável
  // por fazer a criação do menu de navegação
  // entre os itens do slide
  // será criado uma lista ul
  // e adicionado de acordo com a lista do slide
  // um li com o href slide1, slide3 e com o texto
  // 1, 2, 3
  // foi colocado como slide1 para não ficar estranho
  // caso a pessoa veja o texto não faria sentido, se fosse slide 0
  // por final é adicionado o elemento como filho do container do slide
  addPaginacao() {
    const control = document.createElement("ul");

    control.classList.add("paginacao");
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${
        index + 1
      }</a></li>`;
    });

    this.container.appendChild(control);
    return control;
  }

  // adiciona evento em cada item da lista
  // do menu de paginação
  // será prevenido o padrão dele para não abrir
  // nenhum link
  // também será usado o método que troca de slide
  // é passado o index para que seja feita a troca
  addEventPaginacao(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      this.trocaSlide(index);
    });

    // toda vez que ocorrer o evento changeSlide que
    // foi criado, será chamado a função para adicionar
    // a classe ativo, esse evento ocorre toda, vez que é
    // feita  troca de slide
    this.container.addEventListener("changeSlide", this.addClassAtivoPaginacao);
  }

  // funçao que adiciona o control e chama a função
  // para adicionar o evento em cada item do control
  addControl(custom) {
    // irá verificar, se foi
    // passado algum controle customizado, caso
    // sim irá usar ele, caso não irá usar o padrão
    if (custom === undefined) {
      this.control = this.addPaginacao();
    } else {
      this.control = document.querySelector(custom);
    }

    // desestruturando o control para criar um array
    // com os seus filhos
    this.controlArray = [...this.control.children];

    // adicionando para ativar o menu de paginação
    // na primeira vez que já abrir o site
    // e não só quando ocorrer o evento de troca de slide
    this.addClassAtivoPaginacao();

    // chamando função que irá adicionar o evento em cada item
    // não é passado o item e o index para a função, pois
    // no método addEventPaginacao, segue o mesmo padrão
    // de item e index, por isso não é necessário passar os valor
    this.controlArray.forEach(this.addEventPaginacao);
  }

  // adicionando classe ativo
  // no menu de paginação de acordo com o slide
  // atual
  addClassAtivoPaginacao() {
    this.controlArray.forEach((item) => {
      item.classList.remove("ativo");
    });
    this.controlArray[this.index.atual].classList.add("ativo");
  }

  // alterando a referências dos métodos
  // de callback para a classe
  referenciasPaginacao() {
    this.addEventPaginacao = this.addEventPaginacao.bind(this);
    this.addClassAtivoPaginacao = this.addClassAtivoPaginacao.bind(this);
  }
}
