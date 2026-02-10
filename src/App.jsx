import React from 'react'
import { Routes, Route, NavLink} from 'react-router-dom'
import "./App.css"
import About from './page/About'
import Home from './page/Home'
import Company from './page/Company'
import AboutDetail from './page/AboutDetail'
import NotFound from './page/NotFound'
import Board from './page/Board'
import BoardDetail from './page/BoardDetail'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/about/:id' element={<AboutDetail/>}></Route>
          <Route path='/board' element={<Board/>}></Route>
          <Route path='/board/:id' element={<BoardDetail/>}></Route>
          <Route path='/company' element={<Company/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
        
        <Footer/>

    </div>
  )
}

export default App