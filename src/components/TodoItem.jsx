import '../styles/TodoItem.css'
import { IoIosCheckmark } from 'react-icons/io';

function TodoItem({ text, completed, onCheck, onDelete }) {
    return(
        <li className='todo-item'>
            <span className={`todo-item--check ${completed && "todo-item--check--complete"}`} onClick={onCheck}>
                <IoIosCheckmark/>
            </span>
            <p className={`todo--item__p ${completed && "todo-item--text--complete"}`}>{ text }</p>
            <span className='todo-item--delete' onClick={onDelete}>X</span>
        </li>
    )
}

export default TodoItem;