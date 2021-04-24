import React from 'react';

export default function Work() {



  return (<>
    <section className="subsection" id="work-sub" data-aos="fade-left">
      <h1 className="subsection-title">
        Work
      </h1>
      <div className="tabs-container">
        <ul className ="job-tabs-list">
          <li data-tab-target="#sintecsys" className="active job-tab">umgrauemeio</li>
          <li data-tab-target="#radix" className="job-tab">Radix</li>
          <li data-tab-target="#amazon" className="job-tab">Amazon</li>
        </ul>
        <div className="job-tab-content">
          <div id="sintecsys" className="active" data-tab-content>
            <h3>CTO <a href="https://umgrauemeio.com/" target="_blank">@ umgrauemeio</a></h3>
            <p>Jundiaí, Brazil Oct 2019 - Present</p>
            <div className="styled-list">
              <ul>
                <li>We develop wildfire technologies to mitigate Co2 emissions in environmental and agricultural areas</li>
                <li>The solution is based on ai algorithms that detect smoke from cameras located on watchtowers</li>
                <li>Under development: satellites near-real time detection, burnt area maps, risk maps</li>
              </ul>
            </div>
          </div>
          <div id="radix" data-tab-content>
            <h3>Data Science Intern <a href="http://www.radixeng.com/" target="_blank">@ Radix</a></h3>
            <p>Rio de Janeiro, Brazil Jun - Oct 2019</p>
            <div className="styled-list">
              <ul>
                <li>Created models to predict failure conditions in industrial equipments</li>
                <li>Production Optimization : Designed models to fine tune process parameters of equipments in order to reduce their energy consumption.</li>
              </ul>
            </div>  
          </div>
          <div id="amazon" data-tab-content>
            <h3>Operations Management Intern <a href="https://www.aboutamazon.com/amazon-fulfillment/our-fulfillment-centers" target="_blank">@ Amazon</a></h3>
            <p>Orléans, France May - Oct 2018</p>
            <div className="styled-list">
              <ul>
                <li>Designed and implemented Supply chain optimization projects in a Fullfilment Center that handles 400K Units/Day.</li>
                <li>Developed production management tools in Excel / Visual Basic : Extraction and analysis of real time logistics data, flow predictions, productivity management.</li>
                <li>Helped to manage a team of 20 associates.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}