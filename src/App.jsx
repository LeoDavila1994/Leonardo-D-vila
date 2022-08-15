import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar, Home, About, Skills, Projects, Contact } from "./components";

function App() {


  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
