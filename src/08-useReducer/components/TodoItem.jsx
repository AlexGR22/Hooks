import PropTypes from 'prop-types'

export const TodoItem = ({todo, handleDelete, onToggleToDo}) => {
    const { description, id } = todo


    
  return (
    <li className={`list-group-item d-flex justify-content-between`}	>
      <span 
      className={`align-self-center ${todo.done ? 'text-decoration-line-through completed': ''}`}
      onClick={()=> onToggleToDo(id)}
     >
        {description}
      </span>
    <button className="btn btn-danger" onClick={() => handleDelete(id)}>Borrar</button>
    </li>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    onToggleToDo: PropTypes.func
}