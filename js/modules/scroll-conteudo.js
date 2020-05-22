export default class ScrollConteudo {
  // função para adicionar a classe css que será responsável por fazer a animação do texto, conforme for descendo o conteúdo pelo scroll

  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metade = window.innerHeight * 0.7; // calculando 70 % da tela
    this.animaScroll = this.animaScroll.bind(this); // alterando referência
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const topo = section.getBoundingClientRect().top; // metódo que retorna vários valores relacionados a distância entre eles o top
      const visible = topo - this.metade < 0; // toda vez que for menor que zero irá adicionar a classe na section para que seja feita a animação do conteúdo

      if (visible) {
        // visible retorna true caso seja menor e false caso seja maior
        section.classList.add("ativo");
      }
    });
  }

  addEvent() {
    window.addEventListener("scroll", this.animaScroll);
  }

  iniciar() {
    if (this.sections.length) {
      // verificando se existe alguma section
      this.animaScroll(); // executando pela primeira para animar o site
      this.addEvent(); // chamando método que adiciona evento
    }
    return this; // retornando referência da classe
  }
}
