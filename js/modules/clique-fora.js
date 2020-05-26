export default function fora(element, callback) {
  const html = document.documentElement;
  const dataClick = "data-event-fora";
  const eventos = ["touchstart", "click"];

  const clicouFora = (event) => {
    // caso o element não tenha
    // o event.target, quer dizer
    // que foi clicado fora do elemento,
    // sendo assim será removido o atributo,
    // para saber que foi clicado fora
    // após isso será removido os eventos do html,
    // depois será chamado a função de callback
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

  // se não tiver o atributo o element
  // será adicionado os eventos,
  // porém só serão adicionados
  // após a finalização de todos os
  // eventos na call stack (scritp)
  // o event loop irá verificar,
  // se existe eventos na task queue
  // quando não tiver, fará a execução
  // do setTimeout
  // O evento é adicionado ao document html
  // por isso ele só será executado, depois
  // que todos os eventos forem finalizados,
  // pois o event bubble irá verificar
  // se existe algum evento, nos elementos pai
  // body, html, document e window
  if (!element.hasAttribute(dataClick)) {
    eventos.forEach((evento) => {
      // foreach na lista de eventos
      // usado setTimeout para o evento só ser adicionado, após
      // execução do código
      setTimeout(() => {
        html.addEventListener(evento, clicouFora);
      }); // adicionando o evento ao html
    });
    element.setAttribute(dataClick, ""); // adicionando classe no elemento clicado, o setAttribute, precisa obrigatoriamente de dois argumentos, por isso é passado uma string vazia como segundo argumento, o segundo valor seria o novo valor
  }
}
