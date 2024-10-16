

const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: 2,
        todo: 'Piedra del alma',
        done: false
    },
    {
        id: 3,
        todo: 'Piedra del alma',
        done: false
    },
    {
        id: 4,
        todo: 'Piedra del alma',
        done: false
    },]

    const todoReducer = ( state = initialState, action ) => {

        if ( action?.type === '[TODO] Add Todo' ) {
            return [ ...state, action.payload ]
        }


        return state
    }



    let todos = todoReducer();


    const newTodo = {
        id: 5,
        todo: 'Piedra del Poder',
        done: false
    }

    const addTodoAction = {
        type: '[TODO] Add Todo',
        payload: newTodo
    }


    todos = todoReducer( todos, addTodoAction );


    console.log(todos);
    