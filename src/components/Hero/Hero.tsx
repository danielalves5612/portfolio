import './Hero.css'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <div className="hero-content">
      <span className="hero-eyebrow">Desenvolvedor Full Stack</span>
      <h1 className="hero-title">
        Construo aplicações que resolvem <span>problemas reais.</span>
      </h1>
      <p className="hero-description">
        Desenvolvedor Full Stack com foco em React, TypeScript e Node.js.
        Desenvolvo aplicações web completas, da interface à API e banco de
        dados.
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
  )
}

export default Hero
