import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import About from "../components/about"

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Link to="/skills/">Skills</Link>
      <Header headerText="Hello Gatsby!" />
      <About></About>
    </div>
  )
}