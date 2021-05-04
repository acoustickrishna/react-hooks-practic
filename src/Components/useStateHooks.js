import React, { useState } from 'react'

function useStateHooks() {
    const [Count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(Count + 1)}>Click {Count} Times</button>
        </div>
    )
}

export default useStateHooks;
