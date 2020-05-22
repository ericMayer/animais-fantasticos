// "use strict";

// Importando modules

import nav from "./modules/nav-link-interno.js";
import animais from "./modules/animais-conteudo.js";
import faq from "./modules/faq-lista.js";
import scroll from "./modules/scroll-conteudo.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import dropdown from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import aberto from "./modules/horario.js";
import animaisFetch from "./modules/animais-fetch.js";
import bitcoin from "./modules/bitcoin-fetch.js";

// Execução incial das funções

nav();
animais();
faq();
scroll();

const modal = new Modal(
  '[data-modal="login"',
  '[data-modal="fechar"',
  '[data-modal="container"]',
  '[data-modal="button"]',
  ["click", "touchstart"]
);
modal.iniciar();
/*
  const login = document.querySelector('[data-modal="login"');
  const fechar = document.querySelector('[data-modal="fechar"');
  const container = document.querySelector('[data-modal="container"]');
  const button = document.querySelector('[data-modal="button"]');
*/

initTooltip();
dropdown();
menuMobile();
aberto();
animaisFetch();
bitcoin();
