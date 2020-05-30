export default class FaqAccordion {
  constructor(element) {
    this.faqLista = document.querySelectorAll(element);
    this.ativo = "ativo";
  }

  ativou(item) {
    item.classList.toggle(this.ativo);

    item.nextElementSibling.classList.toggle(this.ativo); // adiciona se não tiver e remove se tiver
  }

  // adicionando eventos
  addEvent() {
    this.faqLista.forEach((item) => {
      // será adicionado evento de click em cada dt
      item.addEventListener("click", () => {
        this.ativou(item);
      }); // adicionando evento de click e chamando a função ativo
    });
  }

  iniciar() {
    if (this.faqLista.length) {
      this.ativou(this.faqLista[0]); // ativando o primeiro na primeira vez que abrir o site
      this.addEvent();
    }
    return this;
  }
}
