import Navbar from "../components/Navbar"
import Main from "../components/Main"
import About from "../components/AboutMe"
import IDo from "../components/WhatIDo"  
import Projects from "../components/Project.jsx"
import GetInTouch from "../components/GetInTouch"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div>
        <Navbar />
        <Main />
        <About />
        <IDo />  
        <Projects />
        <GetInTouch />
        <Footer />
    </div>
  )
}

export default Home