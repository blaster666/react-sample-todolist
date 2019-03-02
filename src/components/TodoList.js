import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="list-group my-4">
        <h3 className="text-center">Todo List</h3>
        {items.map(item => (
          <TodoItem key={item.id} title={item.item} />
        ))}
        <button className="btn btn-danger btn-block mt-4">Clear List</button>
      </ul>
    );
  }
}
