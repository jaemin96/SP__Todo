import { useEffect, useState } from "react";
import { TodoType } from "../../Page/Todo/todo";
import "./todoList.scss";

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
          return (
            <div key={item.id} className="listWrapper">
              <span className="listWrapper__id">{index + 1}</span>
              <h1 className="listWrapper__title">{item.title}</h1>
              <span className="listWrapper__delete">x</span>
            </div>
          );
        })}
    </>
  );
};

export default TodoList;
