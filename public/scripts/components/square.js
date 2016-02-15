import React from 'react';


class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      question: this.props.question,
      answer: this.props.answer,
      imgUrl: this.props.imgUrl,
      changed: false
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this._updateScore = this._updateScore.bind(this);
  }
  _updateScore(){
    this.props.updateScore()
  }
  checkAnswer(e){
    if($(e.target).prev().val().toLowerCase() == this.props.children.answer.toLowerCase() ){
      $(e.target).parent().empty().css({"background-image": "url(" + this.props.children.imgUrl + ")"})
      this._updateScore()
    } else {
      $(e.target).parent().empty().css({"background-image": "url('/img/x.png')"})
    }
  }
  render() {
    return(
      <div className="square">
        <p>{ this.props.children.question }</p>
        <input className="answer-input" />
        <button className="btn answer-button" onClick={this.checkAnswer}>Answer</button>
      </div>
    )
  }
}


export default Square;
