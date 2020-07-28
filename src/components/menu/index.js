import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import '../menu/menu.css'
import Button from '../button'
// import ButtonLink from '../../components/components/ButtonLink/index'

function Menu() {
    return (
        <header>
            <nav className="Menu">
            <Link to="/"> 
                <img className="Logo" src={Logo} alt="Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo Video
            </Button>
            </nav>
        </header>
    );
}

export default Menu;