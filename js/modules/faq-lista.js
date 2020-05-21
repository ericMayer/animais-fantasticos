export default function faq() {
  const faqLista = document.querySelectorAll('[data-anime="faq"] dt'); // pegando todas as perguntas

  const ativo = "ativo"; // criando uma variavel para que seja adicionado a classe ativo no html

  const ativou = (element) => {
    element.classList.toggle(ativo); // usando o this que nesse caso, por se tratar de evento referencia o item clicado

    element.nextElementSibling.classList.toggle(ativo); // adicionando classe ativo ao próximo elemento depois do dt, no caso o ativo

    // caso tiver a classe irá remover e se não tiver irá adicionar
  };

  if (faqLista.length) {
    // caso a faqLista tenha algum item

    faqLista[0].classList.add(ativo); // adicionando ativo no primeiro item para que o usuário perceba que é possível abrir o conteúdo
    faqLista[0].nextElementSibling.classList.add(ativo); // adicionando no próximo elemento também a classe ativo

    faqLista.forEach((item) => {
      // será adicionado evento de click em cada dt
      item.addEventListener("click", () => {
        ativou(item);
      }); // adicionando evento de click e chamando a função ativo
    });
  }
}
