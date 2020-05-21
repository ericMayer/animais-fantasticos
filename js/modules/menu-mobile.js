import fora from "./clique-fora.js";

export default function menuMobile() {
  const menuCelular = document.querySelector('[data-menu="mobile');
  const menuList = document.querySelector('[data-menu="list"');
  const eventos = ["touchstart", "click"];

  const abrirMenu = () => {
    menuCelular.classList.toggle("ativo");
    menuList.classList.toggle("ativo");

    fora(menuList, () => {
      // quando for clicado fora do menuList será removido as classes
      menuCelular.classList.remove("ativo");
      menuList.classList.remove("ativo");
    });
  };

  if (menuCelular) {
    eventos.forEach((evento) => {
      // adicionando eventos ao menuCelular
      menuCelular.addEventListener(evento, abrirMenu);
    });
  }
}
