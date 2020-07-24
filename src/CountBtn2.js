import React from 'react';

function CountBtn2(props) {

    const send2 = () => {
        props.updateCounter2(props.value2 + props.count2)

    }
    return (

        <button onClick={send2}>{props.value2}</button>
    );
}

export default CountBtn2;
