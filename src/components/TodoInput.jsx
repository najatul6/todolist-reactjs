

import PropTypes from 'prop-types';

export default function TodoInput(props) {
  const {handleAddTodo,todoValue, setTodoValue}=props
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo...."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

TodoInput.propTypes={
  handleAddTodo:PropTypes.func.isRequired,
  todoValue:PropTypes.string.isRequired,
  setTodoValue:PropTypes.func.isRequired,
}
