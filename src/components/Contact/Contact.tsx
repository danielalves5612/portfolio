import './Contact.css'
import Linkedin from '../../assets/contact/linkedin/linkedin-original.svg'
import { Mail, Send } from 'lucide-react'

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container container">
        <div className="contact-content">
          <div className="contact-eyebrow">
            <span>05</span>Contato
          </div>
          <div className="contact-description">
            <h2> Vamos conversar?</h2>
            <p>
              Estou aberto a oportunidades em desenvolvimento e tecnologia, além
              de projetos e conexões profissionais. Se quiser conversar sobre
              uma oportunidade ou conhecer melhor meu trabalho, entre em
              contato.
            </p>
          </div>

          <div className="contact-actions">
            <a href="" className="button-send-email">
              <Mail size={17} />
              Enviar e-mail
            </a>
            <a href="" className="button-view-linkedin">
              <img src={Linkedin} alt="Logo do Linkedin" />
              LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form">
          <div className='message-form'>Responderei assim que possível.</div>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o seu nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite o seu e-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Digite a sua mensagem"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="button-submit">
              Enviar mensagem
              <Send size={17} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
