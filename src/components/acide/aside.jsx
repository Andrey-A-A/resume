import './aside.scss';
import Foto from '../../assets/img/Anisimov-A-A.jpg'
import Telephone from '../../assets/img/telephone.svg'
import Telegram from '../../assets/img/telegram_1.svg'
import Email from '../../assets/img/email_1.svg'
import Github from '../../assets/img/github_1.svg'

const Aside = () => {
  return (
    <aside>
      <div className="profile__info">
        <img src={Foto} alt="Анисимов Андрей" />
        <h3>Андрей Анисимов</h3>
        <span>Фронтенд разработчик</span>
      </div>
      <div className="profile__contacts">
          <h4 className="profile__title">Контакты</h4>
          <div className="contact">
            <div className="contact__icon">
              <img src={Telephone} alt="Телефон" />
            </div>
            <div className="contact__value">
              +79857219442
            </div>
          </div>
          <div className="contact">
            <div className="contact__icon">
              <img src={Telegram} alt="Telegram" />
            </div>
            <div className="contact__value">
              <a href="https://t.me/Anisimov_A_A">https://t.me/Anisimov_A_A</a>
            </div>
          </div>
          <div className="contact">
            <div className="contact__icon">
              <img src={Github} alt="Github" />
            </div>
            <div className="contact__value">
              <a href="https://github.com/Andrey-A-A">https://github.com/Andrey-A-A</a>
            </div>
          </div>
          <div className="contact">
            <div className="contact__icon">
              <img src={Email} alt="Email" />
            </div>
            <div className="contact__value">
              <a href="mailto:anisimov-aa@bk.ru">anisimov-aa@bk.ru</a>
            </div>
          </div>
        </div>
        <div className='page-break'></div>
        <div className="profile__skils">
          <h4 className="profile__title">Навыки</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>ООП</li>
            <li>React</li>
            <li>Redux</li>
            <li>Angular</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Webpack</li>
            <li>Vite</li>
            <li>Git</li>
            <li>Sass/Scss</li>
            <li>Rest API</li>
            <li>WebSockets</li>
            <li>Docker</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>CorelDRAW</li>
            <li>Ajax</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Jest</li>
            <li>CMS ModX</li>
            <li>CMS OpenCart</li>
            <li>CMS Wordpress</li>
          </ul>
        </div>
    </aside>
  )
}

export default Aside