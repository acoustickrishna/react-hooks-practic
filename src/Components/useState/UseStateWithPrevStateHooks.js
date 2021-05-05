import React, { useState } from 'react'

function UseStateWithPrevStateHooks() {
    const [Increment, setIncrement] = useState(0);
    const IncrementTen = () => {
        for (var i = 0; i < 10; i++) {
            //if we use this method then it will only increment 1 every time instead we put it inside loop 
            // setIncrement(Increment + 1)
            //So we can use previous state so we will overcome form this issue 
            setIncrement((prevInc) => prevInc + 1)
        }
    }
    return (
        <div align="center"><br /><br />
            <span>{Increment}</span><br /><br /><br />
            <button onClick={() => setIncrement(0)}>Reset Times</button><br /><br />
            <button onClick={() => setIncrement(Increment + 1)}>Increment Count </button><br /><br />
            <button onClick={() => setIncrement(Increment - 1)}>Decrement Count </button><br /><br />
            <button onClick={IncrementTen}>Increment By 10 </button><br /><br />

        </div>
    )
}

export default UseStateWithPrevStateHooks;