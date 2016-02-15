var React = require('react');
var ReactDOM = require('react-dom');

import Game from "./components/game";
var gameContainer = document.getElementById('game');

ReactDOM.render(<Game url="/api/questions" />, gameContainer);
