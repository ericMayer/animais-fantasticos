export default function initTooltip() {
  const info = document.querySelectorAll('[data-tooltip="informacao"]');

  const criandoTooltip = (element) => {
    const divTooltip = document.createElement("div"); // criando uma div nova
    divTooltip.classList.add("tooltip"); // adicionando classe para que seja estilizado a tooltip

    const texto = element.getAttribute("aria-label"); // pegando o texto do aria-label

    divTooltip.innerText = texto; // adicionando texto na div

    document.body.appendChild(divTooltip); // adicionando ao final do documento
    return divTooltip;
  };

  const moveuMouse = {
    handleEvent(event) {
      // atualizando cordenadas do top e left para ficar seguindo o mouse a caixa com a informação
      this.varTooltip.style.top = `${event.pageY + 20}px`;
      this.varTooltip.style.left = `${event.pageX + 20}px`;
    },
  };

  const tirouMouse = {
    handleEvent() {
      // obrigatoriamente todos objetos que são passados em eventos têm que ter a função handleEvent para ser executado

      this.varTooltip.remove(); // removendo o elemento do hmtl para não exibir mais

      this.element.removeEventListener("mouseleave", tirouMouse); // para remover um evento é necessário passar os mesmos parâmetros usados para chamar o evento

      this.element.removeEventListener("mousemove", moveuMouse); // removendo evento de mousemove
    },
  };

  const mousePorCima = (event, item) => {
    const varTooltip = criandoTooltip(item); // passando o this como parâmetro, pois o this do evento é o item que foi adicionado o evento, o valor da varíavel será o return da função

    varTooltip.style.top = `${event.pageY + 20}px`;
    varTooltip.style.left = `${event.pageX + 20}px`;

    tirouMouse.element = item; // passando o this para o objeto tirouMouse, pois assim é possível remover o evento que foi adicionado
    tirouMouse.varTooltip = varTooltip;
    item.addEventListener("mouseleave", tirouMouse); // adicioando evento para quando o mouse for removido

    moveuMouse.varTooltip = varTooltip;
    item.addEventListener("mousemove", moveuMouse);
  };

  if (info) {
    info.forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        mousePorCima(event, item);
      });
    });
  }
}
