import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const userInputref = useRef(null);
    const [name, setname] = useState("")
    useEffect(() => {
        userInputref.current.focus()
    }, [])

    useEffect(() => {
        console.log(name);
    }, [name])
    
    return (
        <div>
            {/* we need to focus on textbox on render using useRef hooks */}
            <input type="text" ref={userInputref} value={name} onChange={(e)=>setname(e.target.value)} />
        </div>
    )
}

export default UseRef
