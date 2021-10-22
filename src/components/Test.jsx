import React, { Component } from "react";

class Test extends Component {
  state = {
    value: this.props.value
  };


  handleIncr = () =>{
      const newCount = this.state.value + 1
      this.setState({value : newCount})
  }

  render() {
    
     
    return <div>
       
        <p>{this.state.value}</p>
        <button onClick={ this.handleIncr}> Increment</button>


    </div>;
  }
}

export default Test;
