import React, { FormEvent, useEffect, useState } from "react";
import TodoList from "../../Components/TodoList/todoList";
import "./todo.scss";

interface TodoType {
  id: number;
  title: string;
  status: "pending" | "done";
}

const Todo = () => {
  const [title, setTitle] = useState<string>("");
  const [todoItem, setTodoItem] = useState<TodoType>();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle("");
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    console.log("title", title);
  }, [title]);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <button>add</button>
      </form>
      {/* 투두작성 */}
      <TodoList />
    </div>
  );
};

export default Todo;
