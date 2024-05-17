const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="todo-card">
      <h3 className="todo-title">{title}</h3>
      <p>{content}</p>

      <div>
        <button className="delete-btn" onClick={deleteTodo}>
          삭제
        </button>
        <button className="toggle-btn" onClick={toggleTodo}>
          {isDone ? '취소' : '완료'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
