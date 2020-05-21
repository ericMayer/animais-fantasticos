export default function animais() {
  const animaisLista = document.querySelectorAll(
    '[data-anime="animais-lista"] li'
  ); // selecionando a lista de animais
  const animaisDescricao = document.querySelectorAll(
    '[data-anime="animais-descricao"] section'
  ); // selecionando a descrição do texto do animail

  const ativo = "ativo"; // criando uma variavel para que seja adicionado a classe ativo no html

  const eventos = ["click", "touchstart"];

  const ativou = (index) => {
    // função que adiciona ativo ao item clicado

    animaisDescricao.forEach((item) => {
      item.classList.remove(ativo); // removendo a classe ativo
    });

    const animacao = animaisDescricao[index].dataset.anime; // pegando o valor da propriedade do html data-anime

    animaisDescricao[index].classList.add(ativo, animacao); // adicionando classe ativo no item clicado e a classa data-anime
  };

  if (animaisLista.length && animaisDescricao.length) {
    animaisDescricao[0].classList.add(ativo); // adicionando a classe ativo para não ficar em branco o site

    // adicionando eventos a todos os itens da lista de animais
    eventos.forEach((evento) => {
      animaisLista.forEach((item, index) => {
        item.addEventListener(evento, () => {
          // adicionando evento em cada item
          ativou(index); // chamando a função ativo que irá adicionar a classe exatamente no item clicado
        });
      });
    });
  }
}
