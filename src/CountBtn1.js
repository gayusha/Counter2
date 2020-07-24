import React from 'react';

function CountBtn1(props) {

    const send1 = () => {
        props.updateCounter1(props.value1 + props.count1)

    }
    return (

        <button onClick={send1}>{props.value1}</button>
    );
}

export default CountBtn1;
