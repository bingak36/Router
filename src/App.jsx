import React from 'react'
import { Routes, Route, NavLink} from 'react-router-dom'
import About from './page/About'
import Home from './page/Home'
import NotFound from './page/NotFound'

function App() {
  return (
    <div>
<h1>라우터 실습</h1>
      <nav>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/about">소개</NavLink>
          <NavLink to="/company">회사</NavLink>

      </nav>
        <Routes>
          <Route path='/' element={<HOME/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>

    </div>
  )
}

export default App