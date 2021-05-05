import React, { useState } from 'react'

function UseStateWithArray() {
    const [items, setItems] = useState([]);
    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])

        console.log(items)
    }

    return (
        <div align="center"><br /><br />
            <button onClick={addItems}>Add Item</button>
            <ul>
                {items.map(item => {
                    return <li key={item.id}>{item.value}</li>
                })}
            </ul>
        </div>
    )
}

export default UseStateWithArray;

