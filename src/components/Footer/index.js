import React from 'react';
import Logo from '../../assets/img/logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo Masterflix" height="40px" width="100px" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
