import { MenuIcon, Download, X } from 'lucide-react'
import './Header.css'
import { useState, useEffect } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const arrayIds = ['about', 'projects', 'skills', 'carrer', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    arrayIds.forEach((elemento) => {
      const section = document.getElementById(elemento)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleClick = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="header-container">
      <p>
        Daniel <span>Alves</span>
      </p>

      <button onClick={handleClick} className="collapsed-menu">
        {menuOpen ? <X /> : <MenuIcon />}
      </button>

      <div className={`header-navigation ${menuOpen ? 'active' : ''}`}>
        <nav>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
          >
            Sobre
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projetos
          </a>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Tecnologias
          </a>
          <a
            href="#carrer"
            className={activeSection === 'carrer' ? 'active' : ''}
          >
            Carreira
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contato
          </a>
        </nav>

        <a
          className="button-curriculum"
          href="/curriculo_daniel_alves.pdf"
          download
        >
          Baixar CV
          <Download size={15} />
        </a>
      </div>
    </div>
  )
}

export default Header
