import './Projects.css'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import PhotoAppointments from '../../assets/images/appointments.png'

function Projects() {
  return (
    <section className="projects-container">
      <span className="projects-eyebrow">
        <span>02</span>
        Projetos
      </span>
      <h2>Projeto em destaque.</h2>
      <div className="project-card">
        <div className="image-container">
          <img src={PhotoAppointments} alt="interface do BarberSystem" />
        </div>
        <div className="project-text">
          <h3>Barber System</h3>
          <p>
            Sistema para gerenciamento de barbearia, com autenticação, controle
            de acesso por perfis, serviços e agendamentos.
          </p>
        </div>
        <div className="project-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MariaDB</span>
          <span>Sequelize</span>
          <span>JWT</span>
        </div>
        <div className="project-actions">
          <a
            href="https://barber-system-web-puce.vercel.app/"
            target="_blank"
            className="view-project"
          >
            Ver Projeto
            <ArrowUpRight size={17} />
          </a>
          <a
            href="https://github.com/danielalves5612/barber-system-web"
            target='_blank'
            className="view-code"
          >
            <FaGithub size={17} />
            Código
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
