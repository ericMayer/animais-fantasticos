export default function fora(element, callback) {
  const html = document.documentElement;
  const dataClick = "data-event-fora";
  const eventos = ["touchstart", "click"];

  const clicouFora = (event) => {
    // caso o element não contenha o event target deve ser executado a função
    if (!element.contains(event.target)) {
      element.removeAttribute(dataClick);

      eventos.forEach((evento) => {
        // foreach na lista de eventos
        html.removeEventListener(evento, clicouFora); // removendo evento
      });

      // quando clicado no html será executado a função que foi passada
      callback();
    }
  };

  if (!element.hasAttribute(dataClick)) {
    // se não tiver o atributo

    eventos.forEach((evento) => {
      // foreach na lista de eventos
      setTimeout(() => {
        html.addEventListener(evento, clicouFora);
      }); // adicionando o evento ao html
    });
    element.setAttribute(dataClick, ""); // adicionando classe no elemento clicado, o setAttribute, precisa obrigatoriamente de dois argumentos, por isso é passado uma string vazia como segundo argumento, o segundo valor seria o novo valor
  }
}
