import PropTypes from 'prop-types';
import Person from '../../assets/img/person.svg'
import Address from '../../assets/img/address.svg'
import Cloud from '../../assets/img/cloud.svg'
import Work from '../../assets/img/work.svg'
import Experience from '../experience/experience'
import Education from '../../assets/img/education.svg'
import Courses from '../../assets/img/courses.svg'
import './content.scss'

const Content = ({ generatePdf }) => {
  return (
    <main>
      <section>
        <div className="title">
          <h1>Анисимов Андрей</h1>
          <h2>Frontend разработчик / Web разработчик</h2>
          <div className="title__icon">
              <div className="title__icon-addres">
                <img src={Address} alt="адрес" />
                <p>Москва, м. Новокосино</p>
              </div>
              <div className="title__icon-age">
                <img src={Person} alt="возраст" />
                <p>50 лет</p>
              </div>
            </div>
        </div>
        <div className="description">
          <p>
            Имею опыт frontend разработки и web-разработки, опыт командной разработки. Постоянно изучаю новые технологии и подходы в разработке. Мне нравится создавать интересные и удобные приложения и сайты и видеть результат своей работы.
          </p>
          <p>
            Прошел обучение на курсе веб-разработки на платформе webformyself ( <a href="https://webformyself.com/">https://webformyself.com/</a> ).<br/>
            Прошел обучение на курсе Яндекс Практикум «Мидл фронтенд-разработчик» <a href="https://practicum.yandex.ru/middle-frontend/">https://practicum.yandex.ru/middle-frontend/</a> <br/>
            Успешно прошел стажировку в Лиге Цифровой Экономики по курсу «Frontend разработка» <a href="https://www.digitalleague.ru/">https://www.digitalleague.ru/</a>
          </p>  
        </div>
        <button className='loading' onClick={generatePdf}><img src={Cloud} alt="скачивание" /><span>Скачать резюме</span></button>
      </section>
      <section className='experience__list'>
        <div className="headline">
          <h3>Опыт работы</h3>
          <hr/>
          <img src={Work} alt="work" />
        </div>
        <Experience />
      </section>
      <section className='education__list'>
        <div className="headline">
          <h3>Образование</h3>
          <hr/>
          <img src={Education} alt="education" />
        </div>
        <div className="institute">
          <div className="institute__item">
            <p>2006 г.</p>
            <p><b>Межотраслевой институт повышения квалификации и переподготовки руководящих кадров и специалистов Российской экономической академии им. Г.В. Плеханова, Москва</b><br />Управление коммерческой деятельностью, Маркетинг</p>
          </div>
          <div className="institute__item">
            <p>2003 г.</p>
            <p><b>Московский институт мировой экономики и международных экономических отношений</b><br />Мировая экономика, Экономист по специальности «Мировая экономика»</p>
          </div>
          <div className="institute__item">
            <p>2003 г.</p>
            <p><b>Военная инженерно-космическая академия им. А.Ф. Можайского</b><br />Сбор и обработка информации, Инженер электронной техники по специальности «Оптико-электронные приборы»</p>
          </div>  
        </div>
      </section>
      <section className='courses__list'>
        <div className="headline">
          <h3>Курсы</h3>
          <hr/>
          <img src={Courses} alt="Курсы" />
        </div>
        <div className="courses">
          <div className="courses__item">
            <p>2023 г.</p>
            <p><b>стажировка в Лиге Цифровой Экономики</b></p>
            <p>Лига Цифровой Экономики, Frontend-разработка</p>
            <a href="https://www.digitalleague.ru/">https://www.digitalleague.ru/</a>
          </div>
          <div className="courses__item">
            <p>2023 г.</p>
            <p><b>курс «Мидл фронтенд-разработчик»</b></p>
            <p>Яндекс Практикум, Frontend-разработка</p>
            <a href="https://practicum.yandex.ru/middle-frontend/">https://practicum.yandex.ru/middle-frontend/</a>
          </div>
          <div className="courses__item">
            <p>2021 г.</p>
            <p><b>Комплексный курс по веб-разработке</b></p>
            <p>webformyself.com, frontend, backend</p>
            <a href="https://webformyself.com/">https://webformyself.com/</a>
          </div>  
        </div>
      </section>
    </main>
  )
}

Content.propTypes = {
  generatePdf: PropTypes.func.isRequired,
};

export default Content