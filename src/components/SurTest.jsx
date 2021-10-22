import React, { Component } from "react";
import Test from "./Test";
class SurTest extends Component {

state = {
    WeDyin : [
      {id:1, value:1},  
      {id:2, value:1},  
      {id:3, value:7},  
      {id:4, value:1},  
    ]
}

  render() {
     
    return <div>
        {this.state.WeDyin.map((m) => <Test key={m.id} value={m.value} >
         
        </Test> )}




    </div>;
  }
}

export default SurTest;
