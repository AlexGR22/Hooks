import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer,  [], init)

    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])
    
    const handleNewTodo = (newTodo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        dispatch( action )
    }

    const handleDelete = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const onToggleToDo = ( id ) => {

        dispatch({
            type: '[TODO] toggle Todo',
            payload: id
        })
    }

    // const todosCount = todos.length

    // const pendingTodosCount = todos.filter(todo => !todo.done).length


  return {
    todos,
    handleNewTodo,
    handleDelete,
    onToggleToDo,
    todosCount: todos.length ,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}
