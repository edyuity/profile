import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Me contate
              </p>
            </div>
          </div>
          <div className="row">
          <form action="https://formspree.io/edson.yuity@gmail.com" method="POST">
                <div className="form-group">
                    <label for="nameform">Nome</label>
                    <input type="name" className="form-control" id="namecontrol" placeholder="Digite seu nome"></input>
                </div>
                <div className="form-group">
                    <label for="emailform">E-mail</label>
                    <input type="name" className="form-control" id="emailcontrol" placeholder="Digite seu Email"></input>
                </div>
                <div className="form-group">
                    <label for="emailform">Assunto</label>
                    <input type="name" className="form-control" id="emailcontrol" placeholder="Digite o Assunto da Mensagem"></input>
                </div>
                <div className="form-group">
                    <label for="mensagemform">Mensagem</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua Mensagem"></textarea>
                </div>
                <button type="submit" value="Send">ENVIAR</button>
            </form>

            <aside className="eigth columns footer-widgets">
            </aside>
          </div>
        </section>
        );
  }
}