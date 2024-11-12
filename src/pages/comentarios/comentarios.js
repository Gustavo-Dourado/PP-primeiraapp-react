import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './comentarios.css';
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.png';
import Avatar3 from '../../assets/avatar3.jpg';
import Estrelas from '../../assets/5estrelas.png';
import Curtir from "../../assets/curtir.png";
import Comentar from "../../assets/Comentar.png";


function Comentarios() {

    return (
        <>
            <Header/>

            <span id="topo">Veja as avaliações e comentários, nos conte você também o que achou do filme!</span>
            <div className="box">
                <div className="box-content">
                    <div className="perfil"> <b>Michael Burn</b>
                        <img className="avatar" src={Avatar1} alt='avatar-pessoa1'/>
                        <img className="estrelas" src={Estrelas} alt='avaliacao estrelas'/>
                    </div>
                    <div className="area-coment"> 
                        <span className="comentario">Grande nostalgia em ver esse filme, que nos relembra a cena do primeiro filme da saga logo de cara, aliás isso acontece em várias cenas do filme. A ação demora um pouco de acontecer mas o filme me surpreendeu muito! Indico muito para quem acompanhou os outros filmes!</span>
                        <div className="reagir">
                            <img className="curtir" src={Curtir} alt='botao curtir'/>
                            <img className="comentar" src={Comentar} alt='botao comentar'/>
                        </div>
                    </div>
                </div>
                
                <div className="box-content">
                    <div className="perfil"> <b>Elaine Mathews</b>
                        <img className="avatar" src={Avatar2} alt='avatar-pessoa2'/>
                        <img className="estrelas" src={Estrelas} alt='avaliacao estrelas'/>
                    </div>
                    <div className="area-coment">
                        <span className="comentario">Terminei o filme com o sentimento que teve um fechamento e valeu muito a pena, bom rever personagens que marcaram a história dos filmes anteriores! Filme repleto de boas cenas de ação e uma história que prende a atenção!</span>
                        <div className="reagir">
                            <img className="curtir" src={Curtir} alt='botao curtir'/>
                            <img className="comentar" src={Comentar} alt='botao comentar'/>
                        </div>
                    </div>
                </div>

                <div className="box-content"> 
                    <div className="perfil"> <b>Lisa Kudrow</b>
                        <img className="avatar" src={Avatar3} alt='avatar-pessoa3'/>
                        <img className="estrelas" src={Estrelas} alt='avaliacao estrelas'/>
                    </div>
                    <div className="area-coment">                
                        <span className="comentario">Filmaço que nos faz duvidar da própria história mas no fim nos agracia com a verdadeira identidade dos personagens principais, interessante ver a evolução da sociedade na matrix com a tecnologia cada vez mais avançada. O filme entrega o que promete!</span>
                        <div className="reagir">
                            <img className="curtir" src={Curtir} alt='botao curtir'/>
                            <img className="comentar" src={Comentar} alt='botao comentar'/>
                        </div>
                    </div>
                </div>

                <span id="fim">Comente aqui o que achou do filme!</span>
                <div className="adicionar-comentario">
                    <div className="adicionar-dados">
                        <label className='comentario-label' htmlFor="nome">Nome</label>
                        <input className='comentario-input' type="text" id="nome" />
                        <label className='comentario-label' htmlFor="foto">Foto Perfil</label>
                        <input className='comentario-input' type="file" id="foto"/>
                        <label className='comentario-label' htmlFor="range">Avaliação</label>
                        <input className='comentario-input' type="range" id="range"/>
                    </div>
                    <div className="enviar-comentario">
                        <textarea id="mensagem" cols="70" rows="5"></textarea>
                        <button id="botao-comentar">Comentar</button>
                    </div>
                </div>     
            </div>

           <Footer/>
        </>
    );
  }
  
  export default Comentarios;