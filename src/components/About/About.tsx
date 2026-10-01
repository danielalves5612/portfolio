import './About.css'
import { ArrowUpRight, Target, BookOpen, Lightbulb, Users } from 'lucide-react'

function About() {
  return (
    <section className="about-section">
      <div className="about-container container">
        <div className="about-content">
          <span className="about-eyebrow">
            <span>01</span>Sobre mim
          </span>
          <h2>Mais que código, busco impacto.</h2>
          <div className="about-paragraphs">
            <p>
              Desenvolvedor Full Stack formado em Análise e Desenvolvimento de
              Sistemas pela FIAP, com foco em aplicações web completas
              utilizando React, TypeScript e Node.js.
            </p>
            <p>
              Tenho experiência prática desenvolvendo projetos com APIs REST,
              autenticação, banco de dados relacional e integração entre
              frontend e backend.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/daniel-alves-souza"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Conheça minha trajetória <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="about-values">
          <div className="about-card">
            <span><Target size={20}/></span>
            <h3 className='about-title'>Foco em resultado</h3>
            <p>Busco transformar problemas em soluções funcionais.</p>
          </div>
          <div className="about-card">
            <span><BookOpen size={20}/></span>
            <h3 className='about-title'>Aprendizado contínuo</h3>
            <p>Estou sempre evoluindo e aprofundando meus conhecimentos.</p>
          </div>
          <div className='about-card'>
            <span><Lightbulb size={20}/></span>
            <h3 className='about-title'>Mentalidade de produto</h3>
            <p>Penso além do código e considero a experiência de quem utiliza.</p>
          </div>
          <div className='about-card'>
            <span><Users size={20}/></span>
            <h3 className='about-title'>Trabalho em equipe</h3>
            <p>Valorizo comunicação, colaboração e troca de conhecimento.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
