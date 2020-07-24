import React, {useState} from 'react';
import CountBtn from "./CountBtn";

function CountBar() {

    const [count, setCount] = useState(7)

    const updateCounter = (n) => {
        setCount(n);
    }

    return (
        <div>
            <CountBtn value={-1} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-3} count={count} updateCounter={updateCounter}/>
            <strong> {count} </strong>
            <CountBtn value={+3} count={count} updateCounter={updateCounter}/>
            <CountBtn value={+2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={+1} count={count} updateCounter={updateCounter}/>
        </div>
    );
}

export default CountBar;
