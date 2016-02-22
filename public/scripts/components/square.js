import React from 'react';


class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      question: this.props.question,
      answer: this.props.answer,
      imgUrl: this.props.imgUrl,
      background: ""
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this._updateScore = this._updateScore.bind(this);
  }
  _updateScore(){
    this.props.updateScore()
  }
  checkAnswer(e){
    if($(e.target).prev().val().toLowerCase() == this.props.children.answer.toLowerCase() ){
      this.setState({background: "url(" + this.props.children.imgUrl + ")"})
      this._updateScore()
    } else {
      this.setState({background: "url('/img/x.png')"})
    }
    $(e.target).parent().empty()
  }
  render() {
    return(
      <div className="square" style={ getBackground(this.state.background) }>
        <p>{ this.props.children.question }</p>
        <input className="answer-input" />
        <button className="btn answer-button" onClick={this.checkAnswer}>Answer</button>
      </div>
    )
  }
}

function getBackground(image){
  let style = {
    background: {
      backgroundImage: image
    }
  }
  return style.background
}

export default Square;
