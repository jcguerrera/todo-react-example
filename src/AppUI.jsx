import Counter from './components/Counter';
import Search from './components/Search';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoItem from './components/CreateTodoItem';
import './styles/App.css'
import { TodoContext } from './components/TodoContext';
import { Modal } from './components/Modal';
import { useContext } from 'react';
import { TodoForm } from './components/TodoForm';


function AppUI() {
  const {
    searchedTodos,
    checkItems,
    deleteItems,
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  return (
    <>
    <div className='todo-container'>
        <Counter />
        <Search />   
        <TodoList>
            {searchedTodos.map(item => (
                <TodoItem 
                key={item.text} 
                text={item.text} 
                completed={item.completed}
                onCheck={() => checkItems(item.text)}
                onDelete={() => deleteItems(item.text)}
                />
            ))}
        </TodoList>
        <CreateTodoItem 
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        {
          openModal &&
          <Modal>
            <TodoForm />
          </Modal>
        }
    </div>
    </>
  );
}

export { AppUI };