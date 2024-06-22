export default function TodoCard(props) {
  const { children, handleDeleteTodo, handleUpdateTodo,index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=>{handleUpdateTodo(index)}}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{handleDeleteTodo(index)}}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
