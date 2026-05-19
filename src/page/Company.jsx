import React, { useRef, useState } from 'react'
import './Company.css'

function Company() {
  const [todos, setTodos] = useState([
    { id: 1, text: '아침 회의 준비하기', done: false, date: '2026. 5. 19.' },
    { id: 2, text: '팀장님께 보고서 보내기', done: false, date: '2026. 5. 19.' },
    { id: 3, text: '점심 먹고 이메일 확인하기', done: false, date: '2026. 5. 19.' },
  ])
  const [todoText, setTodoText] = useState('')
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase()),
  )

  const addTodo = (event) => {
    event.preventDefault()

    const nextText = todoText.trim()
    if (!nextText) {
      inputRef.current.focus()
      return
    }

    setTodos((prevTodos) => [
      {
        id: Date.now(),
        text: nextText,
        done: false,
        date: new Date().toLocaleDateString('ko-KR'),
      },
      ...prevTodos,
    ])
    setTodoText('')
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <section className="company">
      <div className="inner company-inner">
        <form className="todo-form" onSubmit={addTodo}>
          <input
            ref={inputRef}
            type="text"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            placeholder="새로운 Todo..."
            aria-label="새로운 Todo"
          />
          <button type="submit">추가</button>
        </form>

        <div className="todo-list-heading">
          <h3>Todo List <span aria-hidden="true">🌱</span></h3>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="검색어를 입력하세요"
            aria-label="검색어를 입력하세요"
          />
        </div>

        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className={todo.done ? 'is-done' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
              </label>
              <time>{todo.date}</time>
              <button type="button" onClick={() => deleteTodo(todo.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>

        {filteredTodos.length === 0 && (
          <p className="todo-empty">검색된 Todo가 없습니다.</p>
        )}
      </div>
    </section>
  )
}

export default Company
