import React, { Component } from "react";

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
    };
  }

  mouseRun = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
      const {children, render} = this.props
      const {x, y} = this.state
      
    return (
        
      <div
        style={{
            position: 'relative',
          width: "200px",
          height: "200px",
          backgroundColor: "lightsteelblue",
        }}
        onMouseMove={this.mouseRun}
      >
          <p>{x}, {y}</p>
          {children(this.state)}
          
      </div>
    );
  }
}

export default Mouse;
