import React, { useEffect } from 'react';
// import { Link } from "gatsby"
import About from "../components/about"
import Projects from "../components/projects"

import AOS from 'aos';
import Typed from 'typed.js'

import "../styles/layout.css"
export default function Home() {
  var typed = new Typed('.typed-element', 
    {
        strings: [
          "ForestFire Engineering",
          "Cycling",
          "Software Development",
          "Piano",
          "Design",
          "Artificial Intelligence",
          "Adventure"
        ],
        typeSpeed: 60,
        backSpeed: 50,
        loop:true,
      }
  );

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div>
      <section className="bg-img-1 section flex-center" id="intro-section">
        <div className="intro-text">
          <h1 className="title-name">Antonio Leblanc</h1>
          <p className="typed-sentence"><span className="typed-element"></span></p>
        </div>
      </section>

      <About></About>
      <Projects></Projects>
    </div>
  )
}
