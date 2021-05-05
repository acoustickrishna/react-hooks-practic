import React, { useEffect, useState } from 'react'
import UseEffectOnlyOnce from './UseEffectOnlyOnce'

function UseEffectWithCleanUp() {

    const [toggleDisplay, settoggleDisplay] = useState(true)

    return (
        <div align="center"><br /><br />
            {
                toggleDisplay && <UseEffectOnlyOnce />
            }
            <button onClick={() => settoggleDisplay(!toggleDisplay)}>Remove From Dom</button>
        </div>
    )
}

export default UseEffectWithCleanUp;
