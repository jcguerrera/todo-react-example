import { useContext, useState } from "react";
import "../styles/TodoForm.css"
import { TodoContext } from "./TodoContext";

function TodoForm(){
    const { openModal, setOpenModal, addTodos } = useContext(TodoContext);
    const [newValue, setNewValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newValue);
        setOpenModal(!openModal) 
    }

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(!openModal) 
    }

    const onChange = (event) => {
        setNewValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}
            onChange={onChange}
        >
            <label>Nuevo Todo</label>
            <textarea placeholder="jugar mas val"/>
            <div className="button-container">
                <button 
                    onClick= {onCancel}
                    className="button-cancel"
                >
                    Cancelar
                </button>
                <button 
                    onClick={onSubmit}
                    className="button-add"
                >
                    Crear
                </button>
            </div>
        </form>
    );
}

export { TodoForm}