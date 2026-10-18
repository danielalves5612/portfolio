import { MenuIcon, Download, X } from 'lucide-react'
import './Header.css'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="header-container">
      <p>
        Daniel <span>Alves</span>
      </p>

      <button onClick={handleClick} className="collapsed-menu">
        {menuOpen ? <X/> : <MenuIcon/>}
      </button>

      <div className={`header-navigation ${menuOpen ? 'active' : ''}`}>
        <nav>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Tecnologias</a>
          <a href="#carrer">Carreira</a>
          <a href="#contact">Contato</a>
        </nav>

        <a className="button-curriculum">
          Baixar CV
          <Download size={15} />
        </a>
      </div>
    </div>
  )
}

export default Header
