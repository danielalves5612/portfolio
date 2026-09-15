import './Contact.css'
import Linkedin from '../../assets/contact/linkedin/linkedin-original.svg'
import { Mail } from 'lucide-react'

function Contact() {
  return (
    <section className="contact-container">
      <span className="contact-eyebrow">
        <span>05</span>Contato
      </span>
      <div className="contact-description">
        <h2> Vamos conversar?</h2>
        <p>
          Estou sempre aberto a novas oportunidades, projetos e trocas de
          ideias.
        </p>
      </div>
      <div className="contact-actions">
        <a href="" className="button-send-email">
          <Mail size={17}/>
          Enviar e-mail</a>
        <a href="" className="button-view-linkedin">
          <img src={Linkedin} alt="Logo do Linkedin"/>
          LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact
