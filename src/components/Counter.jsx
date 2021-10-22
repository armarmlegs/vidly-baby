import React, { Component } from "react";

class Counter extends Component {
  // renderTags() {
  //   console.log(this.props.target)
  //   if (this.state.tags.length === 0) return <p>No tags Land</p>;
  //   return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  // }

  // handleDecrement = () => {

  //   this.setState({ count : this.state.count -=1})

  // }

  render() {
    return (
      <div className="row">
        <div className="div col-1">
          <span> {this.props.target.value}</span>
        </div>
        <div className="col">
          {" "}
          <button
            onClick={this.props.onIncrement}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            className=" btn btn-dark btn-sm m-2"
            onClick={this.props.onDecrement}
            disabled={this.props.target.value === 0 ? true : false}
           
          >
            -
          </button>
          <button
            onClick={this.props.onDelete}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>

        {/* <button onClick= {this.handleDecrement}className="btn btn-secondary btn-sm">Decrement</button> */}
        {/* <p>{this.props.target.tags.length === 0 && 'there are no tags'}</p> */}
        {/* <div> {this.renderTags()}</div> */}
      </div>
    );
  }
}

export default Counter;
