#language: pt

Funcionalidade: Achar locais para usar meu cartão VR
    Cenário: Verificar o mapa de aceitação
    Dado que o usuário está na página inicial do site www.vr.com.br
    Quando navegar até a seção Pra Você
    E clicar no botão Onde usar meu cartão VR
    Então o mapa do Google deve ser exibido em tela
