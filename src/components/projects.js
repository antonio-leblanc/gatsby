import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Projects() {

useEffect(() => {
  /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
     AOS.init({
      offset:150,
      duration:1000,
      once:false
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (<>
    <div>
      <h1>Scroll down!</h1>
        <section style={{ height: "1200px" }} />
          <div data-aos="fade-left">
            <h3>I am a plain old h3-tag'</h3>
            <h1>Scroll back up and then down again to see if the animation will work again. Inspect the animated elements to see the classes change on scroll.</h1>
          </div>
        <section style={{ height: "1200px" }} />
    </div>
    <div data-aos="fade-left">
      <div>Pantera</div>
      <div>ThreeJs</div>
      <div>FireMap</div>
    </div>
    </>
  )
}