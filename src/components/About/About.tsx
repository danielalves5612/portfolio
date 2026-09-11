import './About.css'
import { ArrowUpRight } from 'lucide-react'

function About() {
  return (
    <section className="about-container">
      <span className="about-eyebrow">
        <span>01</span>Sobre mim
      </span>
      <h2>Mais que código, busco impacto.</h2>
      <div className="about-paragraphs">
        <p>
          Desenvolvedor Full Stack formado em Análise e Desenvolvimento de
          Sistemas pela FIAP, com foco em aplicações web completas utilizando
          React, TypeScript e Node.js.
        </p>
        <p>
          Tenho experiência prática desenvolvendo projetos com APIs REST,
          autenticação, banco de dados relacional e integração entre frontend e
          backend.
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
    </section>
  )
}

export default About
