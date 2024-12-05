import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Exercise from "./components/Exercise"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <NavBar/>
    <h1>Fitness Tracker App</h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise' element={<Exercise/>}/>
    </Routes>
    </>
  )
}

export default App
