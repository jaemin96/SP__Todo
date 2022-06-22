import { TodoType } from "../../Page/Todo/todo";

interface Todo {
  items?: TodoType;
}

const TodoList = (props: Todo) => {
  const { items } = props;

  return (
    <>
      <h1>todo_list</h1>
    </>
  );
};

export default TodoList;
