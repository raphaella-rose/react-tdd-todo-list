import React from "react";

const TodoList = () => {
  return (
  <div data-testid="TodoList">
    <h1>Todo List</h1>
    <form>
    <input type="text" placeholder="Enter a task" />
    <input type="submit" value="Submit" />
    </form>
  </div>
  )
}

export default TodoList;
