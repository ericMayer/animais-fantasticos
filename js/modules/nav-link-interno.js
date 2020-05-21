export default function nav() {
  // selecionando todos os links internos
  const linksInternos = document.querySelectorAll(
    '[data-anime="menu"] a[href^="#"'
  );

  const scroll = (event) => {
    // passando propriedade automática event que ocorre no evenlistener

    event.preventDefault(); // desabilitando o link interno

    // pegando o href do link interno clicado que é igual ao id da section que será usado depois
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href); // selecionando pelo ID o item que é para ir e fazer o scroll suave

    // metódo que funciona da seguinte forma manda o conteúdo da forma mandando o conteúdo da página da mesma forma que o scroll de links internos, porém têm como passar algumas opções de comportamentos em forma de atributos de um objeto. Ele funciona da seguinte é chamado o método no elemento e diz va para esse elemento
    section.scrollIntoView({
      behavior: "smooth", // transição suave
      block: "start", // vai direto para o ínicio do elemento
    });

    // mesma forma de fazer, porém com outro método do windows scrollTo
    // const topo = section.offsetTop;

    // window.scrollTo({
    //     behavior: 'smooth',
    //     top: topo,
    // });

    // amabas as formas não são suportadas por navegadores antigos, sendo mais suportadas no firefox e chrom
  };

  // caso tenha algum link interno
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      // fazendo o forEach pela nodeList
      link.addEventListener("click", scroll); // adicionando o evento de clik em cada item e chamando a função scroll
    });
  }
}
