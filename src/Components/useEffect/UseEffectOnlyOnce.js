import React, { useEffect, useState } from 'react'

function UseEffectOnlyOnce() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logMouseMove = (e) => {
        console.log("Mouse move")
        setx(e.clientX)
        sety(e.clientY)
    }

    // if we use following code it will call everytime whenever state change 

    // useEffect(() => {
    //     console.log("Use effect CAlled")
    //     window.addEventListener('mousemove', logMouseMove)
    // })


    // if we pass dependency array then it will only call once so we will pass [] blank array so it will called only once

    useEffect(() => {
        console.log("Use effect CAlled")
        window.addEventListener('mousemove', logMouseMove)


    // if we click on the button it will remove the element from dom so then it will give a warning "  Can't perform a React state update on an unmounted component. "
    // then the mouse move event still work so for that we need to return in useEffect
    // we will do just this following

    return ()=>{
        console.log('Component Unmounted');
        window.removeEventListener('mousemove',logMouseMove)
    }

    },[])

    return (
        <div align="center"><br /><br />
          x = {x} , y = {y}
        </div>
    )
}

export default UseEffectOnlyOnce;
