import { useEffect } from "react";
import { TodoType } from "../../Page/Todo/todo";

type Todo = {
  items: TodoType[];
};

const TodoList = ({ items }: Todo): React.ReactElement => {
  useEffect(() => {
    console.log("items", items);
  }, [items]);

  return (
    <>
      <h1>todo_list</h1>
    </>
  );
};

export default TodoList;
