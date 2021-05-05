
import React from 'react'

function Button({handelClick,children}) {
    console.log("Rendering button - "+ children)
    return (
        <div>
            <button onClick={handelClick}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button)
