export default class TooltipInfo {
  constructor(info) {
    this.info = document.querySelectorAll(info);

    // alterando referência do this
    this.tirouMouse = this.tirouMouse.bind(this);
    this.mousePorCima = this.mousePorCima.bind(this);
    this.moveuMouse = this.moveuMouse.bind(this);
  }

  criandoTooltip(element) {
    const divTooltip = document.createElement("div"); // criando uma div nova
    divTooltip.classList.add("tooltip"); // adicionando classe para que seja estilizado a tooltip

    const texto = element.getAttribute("aria-label"); // pegando o texto do aria-label

    divTooltip.innerText = texto; // adicionando texto na div

    document.body.appendChild(divTooltip); // adicionando ao final do documento
    this.varTooltip = divTooltip;
  }

  moveuMouse(event) {
    // atualizando cordenadas do top e left para ficar seguindo o mouse a caixa com a informação
    this.varTooltip.style.top = `${event.pageY + 20}px`;

    // verifica se a posição do mouse na tela + 200 que seria o valor da tooltip é maior que a tela
    if (event.pageX + 200 >= window.innerWidth) {
      // diminuindo a posição horizontal para não estourar a tela
      this.varTooltip.style.left = `${event.pageX - 170}px`;
    } else {
      this.varTooltip.style.left = `${event.pageX + 20}px`;
    }
  }

  tirouMouse(event) {
    const { currentTarget: item } = event;

    this.varTooltip.remove(); // removendo o elemento do hmtl para não exibir mais

    item.removeEventListener("mouseleave", this.tirouMouse); // para remover um evento é necessário passar os mesmos parâmetros usados para chamar o evento

    item.removeEventListener("mousemove", this.moveuMouse); // removendo evento de mousemove
  }

  mousePorCima(event) {
    // desestruturando e pegnado valor do event.currentTarget e colocando em item
    const { currentTarget: item } = event;

    this.criandoTooltip(item); // passando a imagem para pegar os paramêtros para criar a tooltip

    item.addEventListener("mouseleave", this.tirouMouse); // adicioando evento para quando o mouse for removido

    // pega o event currentTarget que é onde está o mouse quando foi acionado o evento de mouseover
    item.addEventListener("mousemove", this.moveuMouse);
  }

  // adiciona evento
  addEvent() {
    this.info.forEach((item) => {
      item.addEventListener("mouseover", this.mousePorCima);
    });
  }

  iniciar() {
    if (this.info.length) {
      this.addEvent();
    }
    return this;
  }
}
