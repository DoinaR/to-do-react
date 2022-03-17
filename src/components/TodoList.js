import React from 'react'

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleComplete = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const handleEdit = (id) => {
    setEditTodo(todos.find((todo) => todo.id === id))
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <li className='list-item' key={todo.id}>
            <input
              type='text'
              value={todo.title}
              className={`list ${todo.completed ? 'complete' : ''}`}
              onChange={(e) => e.preventDefault()}
            />
            <button
              className='button-complete task-button'
              onClick={() => handleComplete(todo.id)}
            >
              <i className='fa fa-check-circle'></i>
            </button>
            <button
              className='button-edit task-button'
              onClick={() => handleEdit(todo.id)}
            >
              <i className='fa fa-edit'></i>
            </button>
            <button
              className='button-delete task-button'
              onClick={() => handleDelete(todo.id)}
            >
              <i className='fa fa-trash'></i>
            </button>
          </li>
        )
      })}
    </div>
  )
}

export default TodoList
