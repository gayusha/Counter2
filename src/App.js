import React, {useState} from 'react';
import CountBtn from "./CountBtn";
import CountBtn1 from "./CountBtn1";
import CountBtn2 from "./CountBtn2";
import CountBar from "./CountBar";


function App() {

    const [countBars, setCountBars] = useState(0)
    const [count, setCount] = useState(7)
    const [count1, setCount1] = useState(7)
    const [count2, setCount2] = useState(7)

    const addCountBar = () => {
        setCountBars(countBars + 1)
    }
    const deleteCountBar = () => {
        setCountBars(countBars - 1)
    }

    const updateCounter = (n) => {
        setCount(n);
    }
    const updateCounter1 = (n1) => {
        setCount1(n1);
    }
    const updateCounter2 = (n2) => {
        setCount2(n2);
    }

    const items = [];
    for (let i = 0; i < countBars; i++) {
        items.push(<CountBar/>)
    }

    return (

        <div className="App">

            <hr/>
            <strong>COUNTER</strong>
            <hr/>

            <CountBtn value={-1} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={-3} count={count} updateCounter={updateCounter}/>

            <strong> {count} </strong>

            <CountBtn value={+3} count={count} updateCounter={updateCounter}/>
            <CountBtn value={+2} count={count} updateCounter={updateCounter}/>
            <CountBtn value={+1} count={count} updateCounter={updateCounter}/>

            <br/>

            <CountBtn1 value1={-1} count1={count1} updateCounter1={updateCounter1}/>
            <CountBtn1 value1={-2} count1={count1} updateCounter1={updateCounter1}/>
            <CountBtn1 value1={-3} count1={count1} updateCounter1={updateCounter1}/>

            <strong> {count1} </strong>

            <CountBtn1 value1={+3} count1={count1} updateCounter1={updateCounter1}/>
            <CountBtn1 value1={+2} count1={count1} updateCounter1={updateCounter1}/>
            <CountBtn1 value1={+1} count1={count1} updateCounter1={updateCounter1}/>

            <br/>

            <CountBtn2 value2={-1} count2={count2} updateCounter2={updateCounter2}/>
            <CountBtn2 value2={-2} count2={count2} updateCounter2={updateCounter2}/>
            <CountBtn2 value2={-3} count2={count2} updateCounter2={updateCounter2}/>

            <strong> {count2} </strong>

            <CountBtn2 value2={+3} count2={count2} updateCounter2={updateCounter2}/>
            <CountBtn2 value2={+2} count2={count2} updateCounter2={updateCounter2}/>
            <CountBtn2 value2={+1} count2={count2} updateCounter2={updateCounter2}/>

            <hr/>

            {items}

            <button className="add" onClick={addCountBar}>ADD</button>
            <button className="add" onClick={deleteCountBar}>DEL</button>


        </div>
    );
}

export default App;
