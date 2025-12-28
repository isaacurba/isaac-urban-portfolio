import Main from "../components/Main"
import About from "../components/AboutMe"
import IDo from "../components/WhatIDo"  
import Projects from "../components/Project.jsx"
import GetInTouch from "../components/GetInTouch"
const Home = () => {
  return (
    <div>
        <Main />
        <About />
        <IDo />  
        <Projects />
        <GetInTouch />
    </div>
  )
}

export default Home