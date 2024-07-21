import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Home_pages from './pages/Home_pages';
import NOPage from "./pages/NOPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';


function App() {


  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home_pages/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path="*" element={<NOPage />} />
        </Routes>
      </Router>
    </div>
      
    </>
  )
}

export default App
