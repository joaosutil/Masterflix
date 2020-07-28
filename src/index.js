import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categorias';
//POR O JOOJ FUTURAMENTE ( NAO TAO FUTURAMENTE ASSIM)
function PageNotFound() {
  return (
      <div> 404 error
      </div> 
  )
 }

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/cadastro/categoria" component={CadastroCategoria} />
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route path="/" component={Home} exact />
  <Route component={PageNotFound} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

