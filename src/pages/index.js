import React from "react"
import { Link } from "gatsby"
import About from "../components/about"

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Link to="/skills/">Skills</Link>
      <About></About>
    </div>
  )
}