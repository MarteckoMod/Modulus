import { useState } from 'react'
import './App.css'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>

      </Routes>

        </Router>
    </>
  )
}

export default App
