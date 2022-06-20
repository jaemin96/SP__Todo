import "./App.scss";
// import { Route, Routes } from "react-router-dom";
import Todo from "./Page/Todo/todo";

const App = () => {
  return (
    <>
      {/* //routing -> 페이지가 하나라서 굳이...
      <Routes>
        <Route path="todo" element={<Todo />} />
      </Routes> */}
      <Todo />
    </>
  );
};

export default App;
