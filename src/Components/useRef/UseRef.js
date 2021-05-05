import React, { useEffect, useRef, useState } from 'react'

function UseRefWithIntervel() {
    const [timer, settimer] = useState(0)
    const intervelRef = useRef()
    useEffect(() => {
        intervelRef.current = setInterval(() => {
            settimer(prevTimer => prevTimer + 1)
        }, 1000)
    }, [])

    return (
        <div align="center">
            {timer}<br />
            <button onClick={()=>clearInterval(intervelRef.current)}>Stop Timer</button>
        </div>
    )
}

export default UseRefWithIntervel
