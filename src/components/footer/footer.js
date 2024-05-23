import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpeg';
import './footer.css'

function Footer(){

    return (
        <footer>
            <img id="logo" src={Logo} alt='logo matrix'/>
            
            <nav className="footer-navigation">
                <ul className="footer">    
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
          
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>

        <span>Todos os direitos reservados &#169;</span>
        <span>Site Desenvolvido por Gustavo Dourado</span>
        
        </footer>
    )
}

export default Footer