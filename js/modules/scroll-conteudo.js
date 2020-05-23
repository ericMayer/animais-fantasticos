export default class ScrollConteudo {
  // função para adicionar a classe css que será responsável por fazer a animação do texto, conforme for descendo o conteúdo pelo scroll

  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metade = window.innerHeight * 0.6; // calculando 70 % da tela
    this.anima = this.anima.bind(this); // alterando referência
  }

  // método responsável por pegar a distância do top
  // e diminuir menos a metade do tamanho da tela
  // depois retorna um objeto com o top e a section
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      return {
        top: Math.floor(section.offsetTop - this.metade),
        element: section,
      };
    });
  }

  // verifica se o eixo Y do window é maior que
  // o item.top que é o a distância que está do topo a section,
  // se sim adiciona a classe ativo para que seja executado
  // a animação
  anima() {
    let contador = 0;
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.top) {
        item.element.classList.add("ativo");
        contador += 1;
      }
    });

    // é criado um contador que soma + 1
    // cada vez que é adicionado a classe ativo
    // quando esse valor for igual ao
    // length de sections será chamado
    // o método responsável por destruir o evento
    // pois só será animado uma vez na página
    if (contador === this.sections.length) {
      this.destroyer();
    }
  }

  // adicionando evento
  addEvent() {
    window.addEventListener("scroll", this.anima);
  }

  iniciar() {
    // verificando se existe alguma section
    if (this.sections.length) {
      // pegando a distância inicial de cada section
      // em relação ao topo
      this.getDistance();

      this.anima(); // executando pela primeira para animar o site
      this.addEvent(); // chamando método que adiciona evento
    }
    return this; // retornando referência da classe
  }

  // remove o evento
  destroyer() {
    window.removeEventListener("scroll", this.anima);
  }
}
