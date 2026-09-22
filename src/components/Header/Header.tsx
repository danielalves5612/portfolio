import { MenuIcon, Download } from 'lucide-react'
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
          <a href="">Tecnologias</a>
          <a href="">Formação</a>
          <a href="">Contato</a>
        </nav>

        <a className="button-curriculum">Baixar CV<Download size={15}/></a>
      </div>

      <button className='collapsed-menu'>
        <MenuIcon />
      </button>
    </div>
  )
}

export default Header
