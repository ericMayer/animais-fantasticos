export default function scroll() {
  // função para adicionar a classe css que será responsável por fazer a animação do texto, conforme for descendo o conteúdo pelo scroll

  const sections = document.querySelectorAll('[data-anime="conteudo"]');
  const metade = window.innerHeight * 0.7; // pegando 70% do tamanho do heigth da tela, para definir se a section estará visível ou não

  const animaScroll = () => {
    sections.forEach((section) => {
      const topo = section.getBoundingClientRect().top; // metódo que retorna vários valores relacionados a distância entre eles o top
      const visible = topo - metade < 0; // toda vez que for menor que zero irá adicionar a classe na section para que seja feita a animação do conteúdo

      if (visible) {
        // visible retorna true caso seja menor e false caso seja maior
        section.classList.add("ativo");
      }
    });
  };

  if (sections.length) {
    // se a node list não for vazia

    animaScroll(); // executando a função uma vez para que o contéudo seja exibido, ao executar a função uma vez o visible será menor que 0 e irá adicionar a classe ativo na primeira section, já fazendo a animação

    // adicionando listener ao window objeto principal do javascript
    window.addEventListener("scroll", animaScroll);
  }
}
