import React from 'react';

export default function Education() {

  return (<>
    <div className="subsection"  data-aos="fade-left">
      <div className="img-container">
        <img className="rounded-img" src={'/images/centrale.png'} alt="Logo" />
      </div>
      <div className="subsection-content"><h1 className="content-title">
          Education</h1>
        <div className = "content-block">
          <h3 className ="block-title">
            Ecole Centrale de Lyon
          </h3>
          <div className="styled-list">
            <ul>
              <li> General Engineering</li>
              <li> Coach of the Handball</li>
              <li> Member of the
                <a target= '_blank' href="http://www.epsa-team.com/index.php/en/competitions/formula-student">
                Formula Student Team
                </a>
              </li>
              <li>
                Interview for the
                <a target= '_blank' href="https://www.centraliens-lyon.net/technica/article/centralien-de-l-etranger-antonio-leblanc-de-l-ecl-a-une-start-up-bresilienne-specialisee-dans-la-detection-d-incendies-de-forets/217">
                  School Magazine
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className = "content-block">
          <h3 className ="block-title">Universidade Federal do Rio de Janeiro</h3>
          <div className="styled-list">
          <ul>
            <li>Mechanical Engineering</li>
            <li>
              Member of the 
              <a target= "_blank" href= "http://minervabots.poli.ufrj.br/">
              Robotics Team
              </a>
            </li>
            <li>
              <a target= "_blank" href= "http://www.monografias.poli.ufrj.br/monografias/monopoli10031238.pdf">
                Final Project
              </a>
            </li>
            
          </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}