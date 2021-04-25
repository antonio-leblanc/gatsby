import React from "react"

export default function Intro() {
  return (<>
  <div className="subsection" data-aos="fade-right" id= "about">
    <div className="img-container">
      <img className="rounded-img" src={'/images/about_me.jpg'} alt="Logo" />
    </div>
    <div className="subsection-content">
      <div className="content-block">
        <p>Hello there!</p>
        <p>I'm Antonio, a fresh-graduate Mechanical Engineer, passionate about learning and acquiring new skills.</p>
        <p>I want to make a positive impact on the world and fight climate change through forest fire detection.</p>
        <p>In order to live a fulfilled life, I do my best to find balance beetwen these dimensions :</p>
        <div className="styled-list">
          <ul>
            <li>Relationships</li>
            <li>Self-improvement</li>
            <li>Music</li>
            <li>Sports</li>
            <li>Work</li>
          </ul>
        </div>
      </div>

      </div>
</div>
  </>
  )
}

