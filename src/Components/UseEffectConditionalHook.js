import React, { useEffect, useState } from 'react'

function UseEffectConditionalHook() {
    const [Increment, setIncrement] = useState(0)
    const [name, setName] = useState("")
    // useEffect(() => {
    //     console.log("docuemnt title update")
    //     document.title = `You Click ${Increment} times`
    // })

    // if we use above code in use effect then it will update title un unnecessary
    // so we will pass dependency array inside that so it will not call unnecessary unless any dependent value not update in side useEffect dependency array 
    // so we do this following code 

    useEffect(() => {
        console.log("docuemnt title update")
        document.title = `You Click ${Increment} times`
    },[Increment])

    
    return (
        <div align="center"><br /><br />
            <button onClick={() => setIncrement(Increment + 1)}>
                Click {Increment} Times
                </button><br />
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default UseEffectConditionalHook;
