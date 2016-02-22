import React from 'react';

class Overlay extends React.Component{
  render() {
    return <div className="overlay">
            <div className="win-lose">
              <h1>You { this.props.outcome } </h1>
            </div>
           </div>
  }
}

export default Overlay;

