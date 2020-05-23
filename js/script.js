// "use strict";

// Importando modules

import NavLinksInternos from "./modules/nav-link-interno.js";

import NavListaAnimais from "./modules/animais-conteudo.js";

import FaqAccordion from "./modules/faq-lista.js";

import scroll from "./modules/scroll-conteudo.js";

import TooltipInfo from "./modules/tooltip.js";

import Modal from "./modules/modal.js";

import dropdown from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import aberto from "./modules/horario.js";

import animaisFetch from "./modules/animais-fetch.js";

import bitcoin from "./modules/bitcoin-fetch.js";

// Execução incial das funções
const eventos = ["click", "touchstart"];

const nav = new NavLinksInternos('[data-anime="menu"] a[href^="#"', [
  "click",
  "touchstart",
]);
nav.iniciar();

const animais = new NavListaAnimais(
  '[data-anime="animais-lista"] li',
  '[data-anime="animais-descricao"] section',
  ["click", "touchstart"]
);
animais.iniciar();

const faq = new FaqAccordion('[data-anime="faq"] dt', eventos);
faq.iniciar();

scroll();

const tooltip = new TooltipInfo('[data-tooltip="informacao"]');
tooltip.iniciar();

const modal = new Modal(
  '[data-modal="login"',
  '[data-modal="fechar"',
  '[data-modal="container"]',
  '[data-modal="button"]',
  ["click", "touchstart"]
);
modal.iniciar();

dropdown();
menuMobile();
aberto();
animaisFetch();
bitcoin();
