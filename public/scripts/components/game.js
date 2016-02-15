import React from 'react';
import Square from './square.js'
import Timer from './timer.js'

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      trivia: [],
      actor: "tom",
      track: "",
      score: 0
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
      $('.overlay').show();
      $('.win-lose-container').show();
    if(this.state.score == 9){
      $('.win-lose').text('You Win')
    } else {
      $('.win-lose').text('You Lose')
    }
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
        <audio autoPlay src={this.state.track}></audio>

      </div>

    )
  }
}

export default Game;

