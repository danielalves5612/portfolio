import './Projects.css'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import PhotoAppointments from '../../assets/images/appointments.png'

function Projects() {
  return (
    <section className="projects-section">
      <div className=" projects-container container">
        <div className="projects-header">
          <div className="projects-eyebrow">
            <span>02</span>
            Projetos
          </div>

          <div className="projects-heading">
            <h2>Projeto em destaque.</h2>
            <p>
              Uma aplicação completa reunindo frontend, backend, API REST e
              banco de dados relacional.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="image-container">
            <img src={PhotoAppointments} alt="interface do BarberSystem" />
          </div>
          <div className="project-content">
            <div className="project-text">
              <span className="badge-principal-project">Projeto principal</span>
              <h3>Barber System</h3>
              <p>
                Sistema Full Stack para gerenciamento de barbearias, com
                autenticação JWT, controle de acesso por perfis e fluxos
                distintos para administradores e clientes. A aplicação integra
                frontend React a uma API REST em Node.js, com gerenciamento de
                serviços, clientes e agendamentos utilizando banco de dados
                relacional.
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
                <ArrowUpRight size={15} />
              </a>
              <a
                href="https://github.com/danielalves5612/barber-system-web"
                target="_blank"
                className="view-code"
              >
                <FaGithub size={15} />
                Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
