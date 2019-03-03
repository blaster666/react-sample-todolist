import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    edit: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newItem = { id: this.state.id, item: this.state.item };
    let updateItems = [...this.state.items, newItem];
    this.setState({ items: updateItems, id: uuid(), item: "", edit: false });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    let filterItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItem
    });
  };

  handleEdit = id => {
    let filterItem = this.state.items.filter(item => item.id !== id);
    let findItem = this.state.items.find(item => item.id === id);
    console.log(findItem);
    this.setState({
      items: filterItem,
      item: findItem.item,
      id: id,
      edit: true
    });
  };
  render() {
    return (
      <div className="containner">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.edit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
