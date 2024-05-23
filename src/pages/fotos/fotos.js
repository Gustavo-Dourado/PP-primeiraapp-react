import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './fotos.css';

function Fotos() {

    return (
        <>
           <Header/>

            <div id="descrito">
                <h1 id='texto-descrito'>Conheça o elenco e veja algumas fotos deste filmaço</h1>
            </div>
            <div className="display-fotos">
                <div className="card foto-1">Keanu Reeves - Neo/Thomas Anderson</div>
                <div className="card foto-2">Carrie Anne-Moss - Trinity/Tiffany</div>
                <div className="card foto-3">Jonathan Groff - Agente Smith</div>
                <div className="card foto-4">Neil Patrick Harris - Analyst</div>
                <div className="card foto-5">Yahya Abdul-Matten II - Morpheus</div>
                <div className="card foto-6">Jessica Henwick - Bugs</div>
                <div className="card foto-7"></div>
                <div className="card foto-8"></div>
                <div className="card foto-9"></div>
            </div>

           <Footer/>
        </>
    );
  }
  
  export default Fotos;