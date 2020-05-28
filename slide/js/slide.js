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

  // ----------- Configurações do Slide ----------------------------- //

  // irá pegar a margem é fazer a subtração
  // do elemento em si para que quando houver
  // a troca de slide a imagem fique centralizada
  // de acordo com a tela
  marginSlide(slide) {
    // pegando a largura total do container que é onde a lista
    // de slide está dentro e diminuindo pelo tamanho do slide
    // dividindo esse resultado por 2, pois assim
    // teremos as margens que estão sendo usadas no lado esquerdo
    // e direito, na vdd teremos apenas uma margem,
    // pois está sendo divido por dois, porém como começa
    // na esquerda, é necessário apenas uma margem
    // para ficar no centro, a outra margem irá ser aplicada
    // automaticamente

    const margin = (this.container.offsetWidth - slide.offsetWidth) / 2;

    // pegando a posição do slide em relação a esquerda
    // é subtraindo pela margem
    // pois assim o slide ficará centralizado
    // é passado o valor como negativo
    // para seguir a ordem natural do slide
    // para  direita, se fosse positivo,
    // seria o contrário
    return -(slide.offsetLeft - margin);
  }

  // irá pegar o elemento que seria a imagem do slide que está
  // é a posição dele para quando for feita a mudança
  // colocar na posicação correta
  config() {
    // desestruturando os filhos da ul
    // e criando uma nova lista
    // com o retorno do map que é
    // o elemento (li) e a posição
    // na tela do elemento
    this.slideArray = [...this.slide.children].map((element) => {
      return {
        element,
        posicao: this.marginSlide(element),
      };
    });
  }

  // método responsável por pegar os itens
  // de navegação do slide que seriam
  // atual, anterior e próximo, será
  // pego esses valores de acordo com o index passado
  slideMenu(index) {
    // pegando o index do último slide
    const lastSlide = this.slideArray.length - 1;

    this.index = {
      anterior: index ? index - 1 : undefined,
      atual: index,
      proximo: index === lastSlide ? undefined : index + 1,
    };
    return this.index;
  }

  // método responsável pela troca de slide
  // de acordo com o index recebido
  trocaSlide(index) {
    this.moveSlide(this.slideArray[index].posicao);

    // toda vez que houver troca de slide,
    // será atualizado o index do slide
    // que têm o slide anterior, atual e próximo
    this.slideMenu(index);

    // atualizando a posição final
    // onde foi movido o slide
    // caso isso não seja feito,
    // quando for fazer a troca do slide irá pegar
    // a posição inicial é voltará para o começo,
    // atualizando a posição a navegação do slide
    // irá continuar sem problemas
    this.move.posicaoFinal = this.slideArray[index].posicao;
  }

  // ----------- Fim Configurações do Slide ----------------------------- //

  // iniciando métodos para funcionamento da classe
  iniciar() {
    this.referencias();
    this.addEvents();

    this.config();
    return this;
  }
}
