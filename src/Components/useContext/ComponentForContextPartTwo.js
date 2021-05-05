import React, { useContext } from 'react'
import { UserContext, EmailContext } from './UseContextHooksPartOne';
function ComponentForContextPartTwo() {
    const username = useContext(UserContext);
    const useremail = useContext(EmailContext);

    return (
        <div>
            <p>
                User Name is {username}
            </p>
            <p>
                User Email is {useremail}
            </p>
        </div>
    )
}

export default ComponentForContextPartTwo
