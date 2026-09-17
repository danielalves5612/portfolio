import './Education.css'
import { GraduationCap, BookOpen } from 'lucide-react'

function Education() {
  return (
    <section className="education-section">
      <div className='education-container container'>
        <span className="education-eyebrow">
          <span>04</span>Formação
        </span>
        <div className="education-card">
          <div className='education-icon'>
            <GraduationCap size={40}/>
          </div>
          <div className='education-info'>
            <p className='education-title'>Análise e Desenvolvimento de Sistemas</p>
            <p className='education-description'>FIAP - Concluído em 2024</p>
          </div>
        </div>
        <div className="education-card">
          <div className='education-icon'>
            <BookOpen size={40}/>
          </div>
          <div className='education-info'>
            <p className='education-title'>Cursos Complementares</p>
            <p className='education-description'>React, Node.js, TypeScript, APIs REST e SQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
