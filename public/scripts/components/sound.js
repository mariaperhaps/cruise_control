import React from 'react';

class Sound extends React.Component{
  render() {
    return (
      <audio autoPlay src={this.props.track} />
    )

  }
}

export default Sound;
