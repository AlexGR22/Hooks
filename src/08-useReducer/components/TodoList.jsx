import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], handleDelete,onToggleToDo }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                //Todo Item...
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        onToggleToDo={onToggleToDo}
                    />
                ))

            }

        </ul>
    )
}


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    onToggleToDo: PropTypes.func.isRequired
}