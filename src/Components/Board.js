import Square from './Square';
// import { useState } from 'react';
import CalculateWinner from './CalculateWinner';

export default function Board(props) {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));
    const nextSquares = [...props.squares];

    function handleClick(i) {
        if(props.squares[i] || CalculateWinner(props.squares)) {
            return;
        }
        nextSquares[i] = props.xIsNext ? 'X' : 'O';
        props.onPlay(nextSquares);
        // setSquares(nextSquares);
        // setXIsNext(!props.xIsNext);
    };

    // function makeSquares() {

    // }

    const winner = CalculateWinner(props.squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if(!nextSquares.includes(null)){
        status = "Draw";
    } else {
        status = "Next player: " + (props.xIsNext ? "X" : "O");
    };

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row top">
                <Square value={props.squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={props.squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={props.squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row middle">
                <Square value={props.squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={props.squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={props.squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row bottom">
                <Square value={props.squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={props.squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={props.squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

// Happy Ending :)