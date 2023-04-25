import {
  REDE_CREDENCIADA_SELECTOR,
  MENU_TRIGGER_SELECTOR,
  MENU_ITEM_SELECTOR,
  SUBMENU_ITEM_SELECTOR,
  GOOGLE_MAP_SELECTOR,
  BTN_FILTRAR_MAPA,
  FECHAR_MODAL,
} from '../enviroments/environments';

class vrElements {
  googleMap = () => {
    return GOOGLE_MAP_SELECTOR;
  };

  redeCredenciada = () => {
    return REDE_CREDENCIADA_SELECTOR;
  };

  menuTrigger = () => {
    return MENU_TRIGGER_SELECTOR;
  };

  menuItem = () => {
    return MENU_ITEM_SELECTOR;
  };

  submenuItem = () => {
    return SUBMENU_ITEM_SELECTOR;
  };

  btnFiltrarMapa = () => {
    return BTN_FILTRAR_MAPA;
  };

  fechaModal = () => {
    return FECHAR_MODAL;
  };
}

export default vrElements;
