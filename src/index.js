import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroDeCategoria from './pages/cadastro/Categorias';
import game from './game/';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/cadastro/categoria" component={CadastroDeCategoria} />
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route path="/" component={Home} exact />
  <Route component={game} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

