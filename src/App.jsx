import { Routes, Route } from "react-router-dom"
import AllProjects from "./pages/AllProjects.jsx"
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<AllProjects/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App