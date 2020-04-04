import React from 'react';

import '../../index.css';
import Square from './square';

export default class Board extends React.Component {

  renderSquare(i, j, squareShade) {
    const val = ((i*8)+j);
    return <Square 
        key = {`i:${i},j:${j}`}
        piece = {this.props.squares[val]} 
        style = {this.props.squares[val] ? this.props.squares[val].style : null}
        shade = {squareShade}
        onClick={() => this.props.onClick(val)}
    />
  }

  render() {
    const board = [];
    for(let i = 0; i < 8; i++){
      const squareRows = [];
      for(let j = 0; j < 8; j++){
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
        squareRows.push(this.renderSquare(i, j, squareShade));
      }
      board.push(<div className="board-row" key={`board-row-${i}`}>{squareRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}

function isEven(num){
  return num % 2 === 0
}