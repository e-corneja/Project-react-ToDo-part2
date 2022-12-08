import Todo from "./Todo.jsx";

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} text={todo.text} isFavorite={todo.isFavorite} />
        );
      })}
    </div>
  );
};

export default Todos;
