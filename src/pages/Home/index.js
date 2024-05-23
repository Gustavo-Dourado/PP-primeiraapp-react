import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Video from '../../assets/MatrixResurrectionsTrailerOficialLegendado.mp4'
import './styles.css';

function Home() {

    return (
      <>
        <Header/>
        <div id='banner'></div>
        <div id='trailer-container'>
          <div className='content'>

            <video id='trailer' controls>
              <source src={Video} type="video/mp4"/>
              Seu navegador não possui suporte para vídeos
            </video>

            <div id="sinopse">
              <p className="description">
              Se o Sr. Anderson, conhecido como Neo, aprendeu alguma coisa é que a escolha, mesmo sendo uma ilusão, 
              é a única maneira de sair ou entrar da Matrix. Ele sabe o que precisa fazer, 
              mas ainda não descobriu que a Matrix está mais forte e perigosa.
              </p>

              <button id="button-ingresso">Comprar Ingresso</button>
            </div>
          </div>
        </div>

        <div className="card-actor-container">
          <div className="card-content">
            <div className="card banner-1">Keanu Reeves - Neo/Thomas Anderson</div>
            <div className="card banner-2">Carrie Anne-Moss - Trinity/Tiffany</div>
            <div className="card banner-3">Yahya Abdul-Matten II - Morpheus</div>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
  
  export default Home;