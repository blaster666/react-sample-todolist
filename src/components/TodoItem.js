import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div>
          <span className="mx-2 text-success">
            <i className="fas fa-pen" />
          </span>
          <span
            className="mx-2 text-danger"
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
