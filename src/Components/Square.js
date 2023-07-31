// import { useState } from 'react';

export default function Square(props) {
    // const [value, setValue] = useState(null);
    
    // function handleClick() {
    //     setValue('X')
    // }

    return (
        <button className="square" onClick={props.onSquareClick}>{props.value}</button>
    )
}


// Happy Ending :)