import './Career.css'
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react'

function Career() {
  return (
    <section className="career-section">
      <div className="career-container container">
        <div className="career-header">
          <div className="career-eyebrow">
            <span>04</span>
            Trajetória
          </div>

          <div className="career-heading">
            <h2>Formação e experiência</h2>
            <p>
              Formação acadêmica e experiências que constroem minha trajetória
              profissional.
            </p>
          </div>
        </div>

        <div className="career-content">
          <div className="education-content">
            <h3>Formação</h3>

            <div className="education-card">
              <div className="education-icon">
                <GraduationCap size={40} />
              </div>

              <div className="education-info">
                <p className="education-title">
                  Análise e Desenvolvimento de Sistemas
                </p>

                <p className="education-description">
                  FIAP • Fev/2023 - Nov/2024
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="education-icon">
                <BookOpen size={40} />
              </div>

              <div className="education-info">
                <p className="education-title">JavaScript e TypeScript - Full Stack</p>

                <p className="education-description">
                  Udemy • Em andamento
                </p>
              </div>
            </div>
          </div>

          <div className="experience-content">
            <h3>Experiência</h3>

            <div className="experience-card">
              <div className="experience-icon">
                <Briefcase size={40} />
              </div>

              <div className="experience-info">
                <p className="experience-title">Assistente de Reservas</p>

                <p className="experience-meta">Nacional Inn Jaraguá • Out/2024 - Out/2025</p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <Briefcase size={40} />
              </div>

              <div className="experience-info">
                <p className="experience-title">Agente de Reservas</p>

                <p className="experience-meta">Dan Inn Planalto • Ago/2024 - Out/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
