import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/accesibilidad.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

import menuAccesibilidad from './utils/menuAccesibilidad';
import agrandarTexto from './accesibilidad/agrandarTexto';
import paginaMonocromatica from './accesibilidad/paginaMonocromatica';

mobileNav();
darkMode();
lazyLoading();
menuAccesibilidad();
agrandarTexto();
paginaMonocromatica();