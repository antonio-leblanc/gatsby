import React from 'react';

export default function Sports() {

  return ( <>
<section className="bg-img-3 section"></section>

<section id= "sports" className='sports section'>
  <h1 className="text-mask" data-aos="fade-up">
    SPORTS
  </h1>
  
  <section className="subsection tri-subsection">
    <div className="img-container">
    <img className="rounded-img" src={'/images/mft.jpeg'} alt="Logo" />

    </div>
    <div className="subsection-content">
      <div className="content-block">
        <h3 className ="block-title">
          {/* <img className="header-icon" src="images/icons/bike.svg"> */}
          Triathlon  
        </h3>
        <div className="styled-list">
          <ul>
            <li>Member of <a href="https://www.mftriathlon.com/" target ="_blank">Marcia Ferreira's</a> 
              Triathlon Team</li>
            <li>Rio Duathlon 2020 - 2nd Place [20-24 years]</li>
            <li>Cylcing</li>
            <li>Running</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="img-container">
    <img className="rounded-img" src={'/images/tri4.jpeg'} alt="Logo" />
    </div>
  </section>

  <section class="subsection">

    <div class="subsection-content">

      <div class="content-block">
        <h3 class ="block-title">
          {/* <img class="header-icon" src="images/icons/skate.svg"> */}
          Other interests
        </h3>
        <div class="styled-list">
          <ul>
            <li>Skate</li>
            <li>Surf</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="subsection-fix-video">
      <div class="video-container">
        <iframe class="resp-iframe" src="https://www.youtube.com/embed/rY_qraWPbE0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  

  </section>

  </section>
  </>
  );
};