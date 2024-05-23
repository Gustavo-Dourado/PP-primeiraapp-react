import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './contato.css';

function Contato() {

    return (
        <>
          <Header/>

          <div id="main-container">
            <div className="form-container">
              <form id='form-contato'>
                <span id="chamada">Fale com a gente, será um prazer em te responder!</span>

                <label className='contato-label' htmlFor="contato-text">Nome</label>
                <input className="descricao" type="text" id="contato-text" name="text"/>
              
                <label className='contato-label' htmlFor="contato-idade">Idade</label>
                <input className="descricao" type="number" id="contato-idade" name="number"/>
                
                <label className='contato-label' htmlFor="contato-email">Email</label>
                <input className="descricao" type="email" id="contato-email" name="email" autoComplete="off"/>
                
                <label className='contato-label' htmlFor="motivo-contato">Motivo do contato</label>
                <select className="descricao" id="motivo-contato" name="motivo-contato"> 
                    <option className ="descricao" value="Duvidas">Dúvidas</option>
                    <option className ="descricao" value="Sugestoes">Sugestões</option>
                    <option className ="descricao" value="Reclamacoes">Reclamações</option>
                </select>
                
                <textarea className="descricao" id="contato-mensagem" name="mensagem" cols="40" rows="15"></textarea>
                
                <button id="botao">Enviar</button>
              </form>
            </div>
          </div>

          <Footer/> 
        </>
    );
  }
  
  export default Contato;