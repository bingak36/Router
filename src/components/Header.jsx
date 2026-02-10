import React from 'react'
import { NavLink } from 'react-router-dom'
import "./css/Header.css"
const Header = () => {
    return (
        <header>
            <div className="inner">

                <h1>title</h1>
                <nav>
                    <NavLink to="/">홈</NavLink>
                    <NavLink to="/about">소개</NavLink>
                    <NavLink to="/company">회사</NavLink>
                    <NavLink to="/board">게시판</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header