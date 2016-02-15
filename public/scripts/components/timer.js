import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = { number: 60 }
    this.decrement = this.decrement.bind(this);
    this._endGame = this._endGame.bind(this);
  };
   componentDidMount() {
      this.timer = setInterval(this.decrement, 1000);
  }
  _endGame(){
    this.props.endGame();
  }
  decrement(){
    if(this.state.number > 0){
      this.setState({number: this.state.number -= 1})
    } else {
      clearInterval(this.timer)
      this._endGame();
    }
  }

  render() {

    return <div className="timer">
              <h1>{this.state.number}</h1>
            </div>
  }
}

export default Timer;
