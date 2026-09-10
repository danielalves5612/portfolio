import { MenuIcon } from 'lucide-react'
import './Header.css'

function Header() {
  return (
    <div className="header-container">
      <p>
        Daniel <span>Alves</span>
      </p>

      <div className="header-navigation">
        <nav>
          <a href="">Sobre</a>
          <a href="">Projetos</a>
          <a href="">Skills</a>
          <a href="">Formação</a>
          <a href="">Contato</a>
        </nav>

        <button className="button-curriculum">Baixar CV</button>
      </div>

      <button>
        <MenuIcon />
      </button>
    </div>
  )
}

export default Header
