import { useEffect, useState } from "react";
import { TodoType } from "../../Page/Todo/todo";

type Todo = {
  items: TodoType[];
};

const TodoList = ({ items }: Todo): React.ReactElement => {
  const [todos, setTodos] = useState<TodoType[]>();

  useEffect(() => {
    console.log("items", items);
    setTodos(items);
  }, [items]);

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <>
      {todos &&
        todos.map((item: TodoType, index: number) => {
          return <h1 key={item.id}>{item.title}</h1>;
        })}
    </>
  );
};

export default TodoList;
