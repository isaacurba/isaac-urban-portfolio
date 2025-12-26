import { Routes, Route } from "react-router-dom"
import AllProjects from "./pages/AllProjects.jsx"
import Home from "./pages/Home.jsx"
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<AllProjects/>}/>
      </Routes>

    </>
  )
}

export default App