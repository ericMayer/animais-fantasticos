export default function initModal() {
  const login = document.querySelector('[data-modal="login"');
  const fechar = document.querySelector('[data-modal="fechar"');
  const container = document.querySelector('[data-modal="container"]');
  const button = document.querySelector('[data-modal="button"]');

  const eventos = ["click", "touchstart"];

  const toggleAtivo = (event) => {
    event.preventDefault(); // prevenindo padrão, assim não irá tentar abrir o link
    container.classList.toggle("ativo"); // adicionando classe ativo para animar e aparecer a tela de login, caso não exista, se existir será removida
  };

  const clicouFora = (event) => {
    if (event.target === this) {
      toggleAtivo(event); // chamado função que remove a classe ativo
    }
  };

  if (login && fechar && container) {
    // se login for uma expressão verdadeira não for por exemplo uma string vazia, irá executar o código abaixo, isso serve para garantir que no login realmente têm algo
    // quando clicado no link de login irá chamar a função ativo
    eventos.forEach((evento) => {
      login.addEventListener(evento, toggleAtivo);
    });

    // quando clicado no botão de fechar será chamado a função remover
    eventos.forEach((evento) => {
      fechar.addEventListener(evento, toggleAtivo);
    });

    // quando clicado fora do modal será chamado a função clicouFora
    eventos.forEach((evento) => {
      container.addEventListener(evento, clicouFora);
    });

    eventos.forEach((evento) => {
      button.addEventListener(evento, (event) => {
        event.preventDefault();
      });
    });
  }
}
