import React from 'react';
import Typed from 'typed.js'

class About extends React.Component {
  componentDidMount() {
    const options = {
    	strings: [
        "ForestFire Engineering",
        "Cycling",
        "Software Development",
        "Piano",
        "Design",
        "Artificial Intelligence",
        "Adventure"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (<>
      <section className="bg-img-1 section flex-center" id="intro-section">
        <div className="intro-text">
          <h1 className="title-name">Antonio Leblanc</h1>
          <div className="typed-sentence">
            <div className="typed-element">
              <span style={{ whiteSpace: 'pre' }} ref={(el) => { this.el = el; }}/>
            </div>
          </div>
        </div>
      </section>

      <p>Hello there!</p>
      <p>I'm Antonio, a fresh-graduate Mechanical Engineer, passionate about learning and acquiring new skills.</p>
      <p>I want to make a positive impact on the world and fight climate change through forest fire detection.</p>
      <p>In order to live a fulfilled life, I do my best to find balance beetwen these dimensions :</p>
      <div >
      <ul>
        <li>Relationships</li>
        <li>Self-improvement</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Work</li>
      </ul>
    </div>
  </>
    );
  }
}

export default About
