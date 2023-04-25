///<reference types="Cypress"/>

import vrElements from '../elements/vr.elements';
import { BASE_URL } from '../enviroments/environments';

const element = new vrElements();

console.log(BASE_URL);

class vrPage {
  visitHomePage() {
    cy.visit(BASE_URL);
  }

  visitRedeCredenciadaPage() {
    cy.get(element.menuTrigger()).click();
    cy.get(element.menuItem()).click();
  }

  navigateToPraVoceSection() {
    cy.get(element.submenuItem()).click();
  }

  verifyGoogleMapIsDisplayed() {
    cy.get(element.fechaModal()).click();
    cy.get(element.googleMap()).should('be.visible');
    cy.get(element.btnFiltrarMapa()).scrollIntoView().should('be.visible');
    cy.window().then((win) => {
      win.close();
    });
  }
}

export default vrPage;
