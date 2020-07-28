import React from 'react';
import { Body } from './styles';

function error() {
  return(
    <Body>
   <div>
     <ul>
         <li>
       <h5>404 Página nao encontrada</h5>
          volte para a página principal
          e tente novamente
          </li>
     </ul>
   </div>
   </Body>

  );
}
export default error