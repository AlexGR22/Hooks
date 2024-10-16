import PropTypes from 'prop-types'
import {useForm} from '../../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    
    // const handleForm = (e) => {
    //     e.preventDefault();
    //     const formData = e.target.elements.todo.value;

    //     if(formData.length <= 1) return console.log('Form is empty');

    //     onNewTodo(formData);
    //     e.target.reset();
  
    // }

    const { onInputChange, onResetForm, todo } = useForm({
        todo: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description: todo,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    }
    

    return (
        <form onSubmit={handleSubmit} >

            <input
                type="text"
                className="form-control"
                placeholder="What needs to be done?"
                name="todo"
                value={todo}
                onChange={onInputChange}
                
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
                
            >
                Add
            </button>
        </form>
    )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}   