import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import CSS from 'csstype'
import './main.css'
import SvgDeleteOutline24Px from './iconComponents/Delete'
import SvgCheck24Px from './iconComponents/Check'
import SvgCheckBoxBlank from './iconComponents/CheckBoxBlank'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

export default function App(): JSX.Element {
  const env = process.env.NODE_ENV

  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  WebFont.load({
    google: {
      families: ['Pacifico']
    }
  });

  const container = {
    margin: '0 auto',
    width: '30%', 
    backgroundColor: '#FFF',
    borderRadius: '0.25em',
    padding: '0.5em',
    fontSize: '4rem',
    fontFamily: '\'Open Sans\', sans-serif',
  }

  const Header = {
    fontFamily: 'Pacifico',
    textAlign: 'center',
    marginTop: '0'
  }

  const AddButton: CSS.Properties = {
    backgroundColor: '#ffc107',
    width: '100%',
    padding: '15px',
    color: '#fff',
    
  }

  const Input: CSS.Properties = {
    borderBottom:' 3px solid #ffc107',
    borderTop: 'none', 
    borderLeft: 'none', 
    borderRight: 'none',
    width: '100%',
    height: '60px',
    fontSize: '2rem',
    display: 'block'
  }

  return (
    <div style={container}>
    <h1 style={Header}>Todo List</h1>
    <form onSubmit={handleSubmit}>
      <input style={Input} type="text" placeholder="What's on your mind?" value={value} onChange={e => setValue(e.target.value)} required />
      <button type="submit" style={AddButton}>Add Todo</button>
    </form>
    <section>
      <ul>
      {todos.map((todo: ITodo, index: number) => (
        <li key={index}>
        <div className="todo left" style={{textDecoration: todo.complete ? 'line-through': '' }}>{todo.text}</div>
        <div className="right">
          <button type='button' className="controlButton" onClick={() => completeTodo(index)}>
            {' '}
            {todo.complete ? <SvgCheck24Px /> : <SvgCheckBoxBlank /> }{' '}
          </button>
          <button className="controlButton" type='button' onClick={() => deleteTodo(index)}><SvgDeleteOutline24Px /> </button>
        </div>
        </ li>
      ))}
      </ul>
    </section>
    </ div>
  )
}

const root = document.getElementById('app-root')
ReactDOM.render(<App/>, root)
