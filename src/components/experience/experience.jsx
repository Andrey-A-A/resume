import { experience } from "../../cervices/data"

const Experience = () => {
  return (
    experience.map((experience) => {
      return (
        <div key={experience.id} className="experience">
          <div className="experience__description">
            <div className="experience__position">
              <div className="experience__name">{experience.post}</div>
              <div className="experience__date">{experience.data}</div>  
            </div>
            <div className="experience__company">{experience.company}<br/>
                <a href={experience.site}>{experience.site}</a>
            </div>
            <div className="experience__details">
              <h4>Должностные обязанности</h4>
              <p dangerouslySetInnerHTML={{ __html: experience.duties }}></p>
              <h4>Доcтижения</h4>
              <p dangerouslySetInnerHTML={{ __html: experience.achievements }}></p>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Experience