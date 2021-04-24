import React, { useEffect } from 'react';
// import { Link } from "gatsby"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Education from "../components/education"

import AOS from 'aos';
import "../styles/layout.css"

export default function Home() {
  useEffect(() => {

    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    AOS.init({
      loop: true,
      offset:150,
      duration:1000,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div>

      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Education></Education>

    </div>
  )
}
