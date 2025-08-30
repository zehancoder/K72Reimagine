
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'
import Navber from './navigation/Navber'
import FullScreenNav from './navigation/FullScreenNav'
function App() {

  return (
    <div>
      <Navber/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/projects' element = {<Project/>}/>
        <Route path='/agence' element = {<Agence/>}/>
      </Routes>
    </div>
  )
}

export default App
