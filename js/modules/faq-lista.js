export default class FaqAccordion {
  constructor(element, eventos) {
    this.faqLista = document.querySelectorAll(element);
    this.eventos = eventos;
    this.ativo = "ativo";
  }

  ativou(item) {
    item.classList.toggle(this.ativo);

    item.nextElementSibling.classList.toggle(this.ativo); // adiciona se não tiver e remove se tiver
  }

  // adicionando eventos
  addEvent() {
    this.eventos.forEach((evento) => {
      this.faqLista.forEach((item) => {
        // será adicionado evento de click em cada dt
        item.addEventListener(evento, () => {
          this.ativou(item);
        }); // adicionando evento de click e chamando a função ativo
      });
    });
  }

  iniciar() {
    if (this.faqLista.length) {
      this.addEvent();
      this.ativou(this.faqLista[0]); // ativando o primeiro na primeira vez que abrir o site
    }
    return this;
  }
}
