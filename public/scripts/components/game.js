import React from 'react';
import Square from './square.js';
import Timer from './timer.js';
import Overlay from './overlay.js';
import Sound from './sound.js';
const ReactDOM = require('react-dom');

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      trivia: [],
      actor: "tom",
      track: "",
      score: 0,
      win: "lose"
    };
    this.updateScore = this.updateScore.bind(this);
    this.endGame = this.endGame.bind(this);
  }
  getData() {
    $.ajax({
      url: this.props.url + "/" + this.state.actor,
      dataType: 'json',
      success: function(data) {
        this.setState({trivia: data[0].trivia, actor: data[0].actor, track: data[0].track});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.getData();
  }
  updateScore(){
    let newScore = this.state.score += 1
    this.setState({score: newScore})
  }
  endGame(){
    let end = document.getElementById('end-game');
    if(this.state.score == 9){
      this.setState({win: "win"})
      this.setState({track: "audio/applause.wav"})
      this.setState({actor: "brad"})
    } else {
      this.setState({track: "audio/aww.mp3"})
    }
    ReactDOM.render(<Overlay outcome={this.state.win} />, end)
  }
  render() {
        let squares = this.state.trivia.map(function(square){
        return (
          <Square updateScore={ this.updateScore }>
           { square }
          </Square>
        )
      }.bind(this));
        return (
        <div className="game">
          <Timer endGame={ this.endGame } />
          { squares }
          <Sound track={this.state.track} />
        </div>
    )
  }
}

export default Game;

