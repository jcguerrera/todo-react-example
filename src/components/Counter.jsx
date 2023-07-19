import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import '../styles/Counter.css';


function Counter(){
  const {completedTodos, totalTodos} = useContext(TodoContext);
  
  return(
    <>
        {
        completedTodos < totalTodos && (
          <h1 className="counter-title">
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
          </h1>
        )}
  
        {completedTodos === totalTodos && totalTodos > 0 && (
          <h1 className="counter-title">
            ¡Todas las tareas completadas! ¡Felicidades!
          </h1>
        )}
  
        {totalTodos === 0 && (
          <h1 className="counter-title">
            Agrega una tarea
          </h1>
        )}
    </>
  )
}

export default Counter;