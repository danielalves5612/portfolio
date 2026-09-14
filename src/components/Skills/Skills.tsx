import './Skills.css'
import React from '../../assets/skills/react/react-original.svg'
import JavaScript from '../../assets/skills/javascript/javascript-original.svg'
import TypeScript from '../../assets/skills/typescript/typescript-original.svg'
import Html from '../../assets/skills/html5/html5-original.svg'
import Css from '../../assets/skills/css3/css3-original.svg'
import NodeJs from '../../assets/skills/nodejs/nodejs-original.svg'
import Express from '../../assets/skills/express/express-original.svg'
import MariaDb from '../../assets/skills/mariadb/mariadb-original.svg'
import MySql from '../../assets/skills/mysql/mysql-alternativo.webp'
import Github from '../../assets/skills/github/github-alternativo.png'
import Git from '../../assets/skills/git/git-original.svg'

function Skills() {
  return (
    <section className="skills-container">
      <span className="skills-eyebrow">
        <span>03</span>Tecnologias
      </span>
      <div className="cards-container">
        <div className="skill-category">
          <span className="skill-category-title">Front-End</span>
          <div className="skills-grid">
            <div className="skill">
              <span className="skill-icon">
                <img src={React} alt="Logo do React" />
              </span>
              <span className="skill-name">React</span>
            </div>

            <div className="skill">
              <span className="skill-icon">
                <img src={JavaScript} alt="Logo do JavaScript" />
              </span>
              <span className="skill-name">JavaScript</span>
            </div>

            <div className="skill">
              <span className="skill-icon">
                <img src={TypeScript} alt="Logo do TypeScript" />
              </span>
              <span className="skill-name">TypeScript</span>
            </div>

            <div className="skill">
              <span className="skill-icon">
                <img src={Html} alt="Logo do HTML" />
              </span>
              <span className="skill-name">HTML</span>
            </div>

            <div className="skill">
              <span className="skill-icon">
                <img src={Css} alt="Logo do CSS" />
              </span>
              <span className="skill-name">CSS</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <span className="skill-category-title">Back-End</span>
          <div className="skills-grid skills-grid--2">
            <div className="skill">
              <span className="skill-icon">
                <img src={NodeJs} alt="Logo do Node.js" />
              </span>
              <span className="skill-name">Node.js</span>
            </div>

            <div className="skill">
              <span className="skill-icon">
                <img src={Express} className='express-icon' alt="Logo do Express" />
              </span>
              <span className="skill-name">Express</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <span className="skill-category-title">Banco de Dados</span>
          <div className="skills-grid skills-grid--2">
            <div className="skill">
              <span className="skill-icon">
                <img src={MariaDb} alt="Logo do MariaDb" />
              </span>
              <span className="skill-name">MariaDB</span>
            </div>

            <div className="skill">
              <span className="skill-icon">
                <img src={MySql} alt="Logo do MySql" />
              </span>
              <span className="skill-name">MySQL</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <span className="skill-category-title">Ferramentas</span>
          <div className="skills-grid skills-grid--2">
            <div className="skill">
              <span className="skill-icon">
                <img src={Github} alt="Logo do Github" />
              </span>
              <span className="skill-name">GitHub</span>
            </div>

            <div className="skill">
              <span className="skill-icon">
                <img src={Git} alt="Logo do Git" />
              </span>
              <span className="skill-name">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
