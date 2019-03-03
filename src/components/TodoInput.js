import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-primary text-white">
                    <i className="fas fa-address-book" />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a Todo Item"
                  value={item}
                  onChange={handleChange}
                />
              </div>

              <button
                className={
                  editItem
                    ? "btn btn-success btn-block mt-3"
                    : "btn btn-primary btn-block mt-3"
                }
              >
                {editItem ? "Edit Item" : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
