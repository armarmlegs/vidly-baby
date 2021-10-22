import React, { Component } from "react";
import Counter from "./Counter";

class Counterrrs extends Component {
  

  render() {
      const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props
    return (
      <div>
         <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map((target) => (
          <Counter
            key={target.id}
            target={target}
            onDelete={() =>onDelete(target)}
            onIncrement={() => onIncrement(target)}
            onDecrement ={() => onDecrement(target)}
          >
            <h3>wassup mayne</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counterrrs;
