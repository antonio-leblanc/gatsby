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
  </>
    );
  }
}

export default About
