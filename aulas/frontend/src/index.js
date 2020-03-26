import React from 'react'; //importando o react
import ReactDOM from 'react-dom'; //importando a integração do react c o navegador/dom
import App from './App'; //importando o arquivo app.js


ReactDOM.render( //render: colocar em tela o App (escreve como uma tag HTML)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //onde esta colocando o App, dentro do da DIV com ID ROOT. Aparece o q tem dentro de App.js
);


