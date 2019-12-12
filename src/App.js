import React from "react";
//import "./App.css";
import List from "./components/List.jsx";
import InputHeader from "./components/Input.jsx";
//import "bootstrap/dist/css/bootstrap.css";
import "./scss/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem("ListItems")) || [],
      value: ""
    };
    console.log(this.state);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleClick = () => {
    const { items, value } = this.state;

    if (items.includes(value)) {
      alert(`Item '${value}' is already exist`);
    } else {
      const newItems = items.concat(value);

      this.storeItems(newItems);

      this.setState({
        items: newItems,
        value: ""
      });
    }
  };

  handleDelete = item => {
    const newItems = this.state.items.filter(value => {
      return value !== item;
    });

    this.storeItems(newItems);

    this.setState({
      items: newItems
    });
  };

  storeItems(items) {
    localStorage.setItem("ListItems", JSON.stringify(items));
  }

  render() {
    return (
      <div className="container">
        <h1>This is ToDo list</h1>
        <div className="row">
          <div className="col">
            <InputHeader
              value={this.state.value}
              placeholder="Enter item here"
              buttonText="Add Item"
              onClick={this.handleClick}
              onChange={this.handleChange}
            />
            <List items={this.state.items} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
