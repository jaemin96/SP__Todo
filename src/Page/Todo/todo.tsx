import React, { FormEvent, useEffect, useState } from "react";
import TodoList from "../../Components/TodoList/todoList";
import "./todo.scss";

export interface TodoType {
  id: number;
  title: string;
  status: "pending" | "done";
}

const Todo = () => {
  const [value, setValue] = useState<string>("");
  const [todoItem, setTodoItem] = useState<Array<TodoType>>([
    {
      id: 1,
      title: "12345",
      status: "pending",
    },
  ]);

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
    };

    const title = target.title.value;

    console.log("title ==>", title);

    setTodoItem((item) => [
      { id: item.length + 1, title: title, status: "pending" },
      ...todoItem,
    ]);

    setValue("");
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  useEffect(() => {
    console.log("todo", todoItem);
  }, [todoItem]);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="title" value={value} onChange={handleValue} />
        <button>add</button>
      </form>
      {/* 투두작성 */}
      <TodoList
      // items={todoItem}
      />
    </div>
  );
};

export default Todo;
