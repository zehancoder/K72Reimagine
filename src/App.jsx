
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/projects' element = {<Project/>}/>
        <Route path='/agence' element = {<Agence/>}/>
      </Routes>
    </div>
  )
}

export default App
