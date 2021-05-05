import React, { useEffect, useState } from 'react'

function UseEffectHooks() {
    const [Increment, setIncrement] = useState(0)
    useEffect(() => {
        document.title = `You Click ${Increment} times`
       
    })
    return (
        <div align="center"><br/><br/>
            <button onClick={() => setIncrement(Increment + 1)}>Click {Increment} Times</button>
        </div>
    )
}

export default UseEffectHooks;
