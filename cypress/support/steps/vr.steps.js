/*global Given, When, Then, And*/
import {
  And,
  When,
} from 'cypress-cucumber-preprocessor/lib/resolveStepDefinition';
import vrPage from '../page/vr.page';
const page = new vrPage();

Given('que o usuário está na página inicial do site www.vr.com.br', () => {
  page.visitHomePage();
});

When('navegar até a seção Pra Você', () => {
  page.visitRedeCredenciadaPage();
});

And('clicar no botão Onde usar meu cartão VR', () => {
  page.navigateToPraVoceSection();
});

Then('o mapa do Google deve ser exibido em tela', () => {
  page.verifyGoogleMapIsDisplayed();
});
