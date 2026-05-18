import React from 'react'
import { communityPosts } from '../data/communityPosts'
import './Board.css'

function Board() {
  return (
    <section className='board'>
      <div className="inner">

        <h2>Community Board</h2>
        <ul className="board-list">
          {communityPosts.map(({ id, title, content }) => (
            <li key={id}>
              <span>
                {id}
              </span>
              <h4>
                {title}
              </h4>
              <p>
                {content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Board
