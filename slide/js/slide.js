import debounceScroll from "../../js/modules/debounce.js";

export default class Slide {
  constructor(container, slide) {
    this.container = document.querySelector(container);
    this.slide = document.querySelector(slide);

    // objeto onde será armazenado
    // os dados do movimento que foi realizado
    // a posição final e inicial, qual o valor
    // que foi realizado o movimento
    this.move = {
      posicaoFinal: 0,
      posicaoInicial: 0,
      movimento: 0,
    };
  }

  // -------------- Eventos de Click ----------------- //

  // callback de quando for clicado
  // e segurado o mouse
  mouseDown(event) {
    // prevenindo padrão para não ficar arrastando a imagem
    event.preventDefault();

    // definindo a posição inicial do movimento
    this.move.posicaoInicial = event.pageX;
    // console.log(this.move.posicaoInicial);

    // adicionando evento de mousemove, qunado foi clicado
    // para arrastar
    this.container.addEventListener("mousemove", this.mouseMove);
  }

  // método quando o mouse é movido
  mouseMove(event) {
    // passando posição atual quando o mouse está sendo movido
    // e armazenando numa variável
    const posicao = this.atualizaPosicao(event.pageX);

    // chamando método que fará o movimento
    // do slide e passando a posição
    this.moveSlide(posicao);
  }

  // quando o mouse não estiver mais clicado
  // será removido o evento de mousemove
  mouseUp() {
    this.container.removeEventListener("mousemove", this.mouseMove);

    // quando for deixado de clicar com o mouse
    // será salva a posição final
    this.move.posicaoFinal = this.move.posicaoSalva;
  }

  // -------------- Fim Eventos de Click ----------------- //

  // -------------- Lógica de movimentação do Slide ----------------- //

  // método que atualiza a posição movida
  atualizaPosicao(pageX) {
    // pegando a distância que foi movida
    // em relação a posição inicial
    // multiplicado por um valor para que seja
    // mais rápida a transição de mudança dos slides
    this.move.movimento = (this.move.posicaoInicial - pageX) * 1.4;

    // retornando a subtração do movimento
    // com a posição final anterior e o valor
    // do movimento realizado, é subtraído, pois
    // assim simulará corretamente a direção do mouse
    return this.move.posicaoFinal - this.move.movimento;
  }

  // método responsável por fazer
  // o movimento do slide
  moveSlide(posicao) {
    // é necessário salvar a posição do movimento,
    // para quando iniciar novamente a movimentação
    // no slide, não começar do começo e sim
    // de onde parou
    this.move.posicaoSalva = posicao;

    // para realizar o movimento do slide
    // será usado o translate3d que irá
    // alterar a posição de acordo com o que foi movido
    // que está sendo pego do objeto this.move
    // está sendo utilizado o eixo x (horizontal)
    this.slide.style.transform = `translate3d(${posicao}px, 0, 0)`;
  }

  // -------------- Fim Lógica de movimentação do Slide ----------------- //

  // -------------- Eventos de Touch -----------------//

  // quando iniciar o toque no slide pelo dedo
  touchStart(event) {
    // pegando a posição inicial do toque
    this.move.posicaoInicial = event.changedTouches[0].pageX;

    this.container.addEventListener("touchmove", this.touchMove);
  }

  // método quando é arrastado com o toque na tela
  touchMove(event) {
    // passando posição atual quando o dedo é arrastado na tela
    // e armazenando numa variável
    const posicao = this.atualizaPosicao(event.changedTouches[0].pageX);

    // chamando método que fará o movimento
    // do slide e passando a posição
    this.moveSlide(posicao);
  }

  // removendo o evento quando
  // o dedo parar de tocar a tela
  touchEnd() {
    this.container.removeEventListener("touchmove", this.touchMove);

    // quando for deixado de tocar na tela
    // será salva a posição final
    this.move.posicaoFinal = this.move.posicaoSalva;
  }

  // -------------- Fim Eventos de Touch -----------------//

  // alterando referências dos this dos eventos
  referencias() {
    // -------- Referência dos métodos de click ------------ //
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseUp = this.mouseUp.bind(this);

    // -------- Fim Referência dos métodos de click ------------ //

    // -------- Referência dos métodos de touch ------------ //

    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);

    // -------- Fim Referência dos métodos de touch ------------ //
  }

  addEvents() {
    // --------- Adiciona Eventos de Click ------------------- //

    // evento de click e arrastar do mouse
    this.container.addEventListener("mousedown", this.mouseDown);

    // evento de quando o mouse deixa de estar clicado
    this.container.addEventListener("mouseup", this.mouseUp);

    // --------- Fim de Adicionar Eventos de Click ------------------- //

    // --------- Adiciona Eventos de Touch ------------------- //

    // evento de clicar com o dedo
    this.container.addEventListener("touchstart", this.touchStart);

    // evento de quando parar de tocar com o dedo
    this.container.addEventListener("touchend", this.touchEnd);

    // --------- Fim de Adicionar Eventos de Touch ------------------- //
  }

  // iniciando métodos para funcionamento da classe
  iniciar() {
    this.referencias();
    this.addEvents();
    return this;
  }
}
