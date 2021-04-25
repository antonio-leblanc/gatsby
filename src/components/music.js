import React from 'react';
export default function Music() {

  return (
<section id= "music" className='music section'>
  <h1 className="text-mask" data-aos="fade-up">
    Music
  </h1> 
  
  <section className="subsection">
    
    <div className="subsection-content">
      <h1 className="content-title">
        {/* <img className="header-icon" src="images/icons/piano.svg"> */}
        Piano
        </h1>

      <div className = "content-block">
        <h3 className ="block-title">Favorite Composers</h3>
        <div className="styled-list">
          <ul>
            <li>Chopin</li>
            <li>Bach</li>
            <li>Debussy</li>
          </ul>
        </div>
      </div>

    </div>
    
    <div className="subsection-fix-video">
      <div className="video-container">
        <iframe className="resp-iframe" src="https://www.youtube.com/embed/bLVWiq8Z1cU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    
  </section>
  </section>
  );
};