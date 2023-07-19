import { createContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({children}){
    const [todos, setTodos] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => 
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    )

    const checkItems = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text == text);
        console.log(newTodos)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    }

    const deleteItems = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text == text);
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }
    
    const addTodos = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            deleteItems,
            checkItems,
            openModal,
            setOpenModal,
            addTodos,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };