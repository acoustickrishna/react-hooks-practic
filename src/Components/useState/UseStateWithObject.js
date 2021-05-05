import React, { useState } from 'react'

function UseStateWithObject() {
    const [Username, setUsername] = useState({ firstname: "", lastname: "" });

    return (
        <div align="center"><br /><br />
            <form>
                <input type="text"
                    value={Username.firstname}
                    //if we use in this way so its only set value only one either it is first name and lastname respectively
                    // onChange={e => setUsername({ firstname: e.target.value })}
                    //So we use spread oprator to archive this
                    onChange={e => setUsername({ ...Username, firstname: e.target.value })}
                />
                <br /><br />
                <input type="text"
                    value={Username.lastname}
                    // onChange={e => setUsername({ lastname: e.target.value })}
                    onChange={e => setUsername({ ...Username, lastname: e.target.value })}
                />
            </form>
            <p>firstname is : {Username.firstname}</p>
            <p>lastname is : {Username.lastname}</p>
            <p>{JSON.stringify(Username)}</p>
        </div>
    )
}

export default UseStateWithObject;

