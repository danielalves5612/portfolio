import './Hero.css'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <span className="hero-eyebrow">Desenvolvedor Full Stack</span>
          <h1 className="hero-title">
            Construo aplicações que resolvem <span>problemas reais.</span>
          </h1>
          <p className="hero-description">
            Desenvolvo aplicações Full Stack com React, TypeScript e Node.js,
            criando interfaces responsivas, APIs REST e integrações com bancos
            de dados relacionais, com foco em soluções funcionais e bem
            estruturadas.
          </p>
          <div className="hero-actions">
            <a href="" className="hero-button hero-button--primary">
              Ver Projetos
              <ArrowRight size={17} />
            </a>
            <a href="" className="hero-button hero-button--secondary">
              Github
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-buttons">
              <span className="code-button red"></span>
              <span className="code-button yellow"></span>
              <span className="code-button green"></span>
            </div>
            <div className="code-card-infos">
              <span>
                <span className="code-property">const</span>{' '}
                <span className="code-variable">developer</span> ={' '}
                <span className="code-variable">{'{'}</span>
              </span>
              <span className="identation-class">
                <span className="code-property">name:</span>
                <span className="code-string"> "Daniel Alves"</span>,
              </span>
              <span className="identation-class">
                <span className="code-property">stack:</span>
                <span className="code-string">
                  ["React", "Node.js", "TypeScript"]
                </span>
                ,
              </span>
              <span className="identation-class">
                <span className="code-property">focus:</span>
                <span className="code-string">"Construir soluções reais"</span>,
              </span>
              <span className="identation-class">
                <span className="code-property">goal:</span>{' '}
                <span className="code-string">"Evoluir sempre"</span>
              </span>
              <span>
                <span className="code-variable">{'}'}</span>
              </span>
              <span className="span-coment">
                // Vamos construir algo incrível juntos?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
