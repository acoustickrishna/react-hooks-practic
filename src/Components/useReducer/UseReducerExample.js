import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state
    }
}
function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>

            count {state}
            <button onClick={() => dispatch('increment')}>Increment</button><br />
            <button onClick={() => dispatch('decrement')}>Decrement</button><br />
            <button onClick={() => dispatch('reset')}>Reset</button><br />

        </div>
    )
}

export default UseReducerExample
