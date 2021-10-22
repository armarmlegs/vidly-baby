import React, { Component } from "react";

import "./App.css";
import Counterrrs from "./components/Counterrrs";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (target) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(target);
    target[index] = { ...counters };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (target) =>{
  
    const counters = [...this.state.counters];
    const index = counters.indexOf(target);
    target[index] = { ...counters };
    counters[index].value--;
    if (counters[index].value < 0) {
      console.log("below zero")
      
    };

    this.setState({counters});
  }

  handleDelete = (targetId) => {
    console.log("clickers");
    const superCancel = this.state.counters.filter((m) => m.id !== targetId.id);
    this.setState({ counters: superCancel });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Navbar totalCounters = {this.state.counters.filter((c) => c.value >0).length} />
        <Counterrrs
        counters = {this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
