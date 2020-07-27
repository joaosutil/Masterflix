import React from 'react';
import Logo from '../../assets/img/logo.png';
import '../menu/menu.css'
import Button from '../button'
// import ButtonLink from '../../components/components/ButtonLink/index'

function Menu() {
    return (
        <header>
            <nav className="Menu">
            <a href="/"> 
                <img className="Logo" src={Logo} alt="Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
              Novo Video
            </Button>
            </nav>
        </header>
    );
}

export default Menu;