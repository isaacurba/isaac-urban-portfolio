import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/AboutMe"
import IDo from "./components/WhatIDo"  
import Projects from "./components/Projects.jsx"
import GetInTouch from "./components/GetInTouch"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <IDo />  
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default App