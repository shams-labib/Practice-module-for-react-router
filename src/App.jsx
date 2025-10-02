
import './App.css'
import Nvaber from './Components/Nvaber'
import Home from './Components/Home'
import { Outlet } from 'react-router'

function App() {
  
  return (
    <>
    <Nvaber></Nvaber>
    <Outlet></Outlet>
    </>
  )
}

export default App
