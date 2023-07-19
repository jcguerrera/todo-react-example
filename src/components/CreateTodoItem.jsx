function CreateTodoItem({openModal, setOpenModal}){
    return(
        <button onClick={
            () => {
              setOpenModal(!openModal);
            }
          }>Add</button>
    )
}

export default CreateTodoItem;