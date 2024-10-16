// import { useEffect, useReducer } from "react"
// import { todoReducer } from "./todoReducer"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "../hooks"


// const initialState = []

// const init = () => {
//     return JSON.parse(localStorage.getItem('todos')) || []
// }

export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoReducer,  initialState, init)

    // useEffect(() => {
      
    //     localStorage.setItem('todos', JSON.stringify(todos))

    // }, [todos])
    

    // const handleNewTodo = (newTodo) => {

    //     const action = {
    //         type: '[TODO] Add Todo',
    //         payload: newTodo
    //     }
    //     dispatch( action )
    // }

    // const handleDelete = ( id ) => {
    //     dispatch({
    //         type: '[TODO] Remove Todo',
    //         payload: id
    //     })
    // }

    // const onToggleToDo = ( id ) => {

    //     dispatch({
    //         type: '[TODO] toggle Todo',
    //         payload: id
    //     })
    // }

    const {
        todos,
        handleNewTodo,
        handleDelete,
        onToggleToDo,
        todosCount,
        pendingTodosCount
    } = useTodo()

  return (
    <>
        <h1>TodoApp: { todosCount }, <small>Pending: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
          
                <TodoList todos={todos} handleDelete={handleDelete} onToggleToDo={onToggleToDo}/>
            </div>
            <div className="col-5">
                <h4>Add TODO</h4>
                <hr />
                
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>
  )
}
