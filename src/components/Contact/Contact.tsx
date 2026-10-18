import './Contact.css'
import Linkedin from '../../assets/contact/linkedin/linkedin-original.svg'
import { Mail, Send, MapPin } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const form = event.currentTarget
      const formData = new FormData(form)

      setIsSubmitting(true)

      const response = await fetch('https://formspree.io/f/xppqnydq', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        toast.success('Mensagem enviada com sucesso!')
      } else {
        toast.error('Não foi possível enviar a mensagem.')
      }
    } catch {
      toast.error('Erro de conexão. Tente Novamente')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
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
            <a href="mailto:da442494@gmail.com" className="button-send-email">
              <Mail size={17} />
              Enviar e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-alves-souza/"
              target="_blank"
              className="button-view-linkedin"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Logo do Linkedin" />
              LinkedIn
            </a>
          </div>

          <div className="contact-info">
            <p>Foco em desenvolvimento Full Stack com React e Node.js</p>

            <p className="contact-location">
              <MapPin size={15} />
              São Paulo, SP • Remoto, híbrido ou presencial
            </p>
          </div>
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--cor-do-card)',
              color: 'var(--texto-principal)',
              border: '1px solid var(--cor-da-borda)',
            },
            success: {
              iconTheme: {
                primary: 'var(--accent)',
                secondary: 'var(--texto-principal)',
              },
            },
          }}
        />
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="message-form">Responderei assim que possível.</div>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o seu nome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite o seu e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Digite a sua mensagem"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="button-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              <Send size={17} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
