import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import CSS from 'csstype'

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
    border: 'none', 
    borderRadius: '5px', 
    color: '#fff',
    
  }

  const Input: CSS.Properties = {
    borderBottom:' 3px solid #ffc107',
    borderTop: 'none', 
    borderLeft: 'none', 
    borderRight: 'none',
    width: '100%',
    height: '60px',
    fontSize: '2rem'
  }

  return (
    <div style={container}>
    <h1 style={Header}>Todo List</h1>
    <form onSubmit={handleSubmit}>
      <input style={Input} type="text" placeholder="What's on your mind?" value={value} onChange={e => setValue(e.target.value)} required />
      <button type="submit" style={AddButton}>Add Todo</button>
    </form>
    <section>
      {todos.map((todo: ITodo, index: number) => (
        <Fragment key={index}>
        <div style={{textDecoration: todo.complete ? 'line-through': '' }}>{todo.text}</div>
        <button type='button' onClick={() => completeTodo(index)}>
          {' '}
          {todo.complete ? 'Incomplete' : 'Complete'}{' '}
        </button>
        <button type='button' onClick={() => deleteTodo(index)}>X</button>
        </ Fragment>
      ))}
    </section>
    </ div>
  )
}

const root = document.getElementById('app-root')
ReactDOM.render(<App/>, root)
