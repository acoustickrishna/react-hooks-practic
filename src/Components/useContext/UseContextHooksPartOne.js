import React from 'react'
import ComponentForContextPartOne from './ComponentForContextPartOne'
import ComponentForContextPartTwo from './ComponentForContextPartTwo'

export const UserContext = React.createContext()
export const EmailContext = React.createContext()

function UseContextHooksPartOne() {
    return (
        <div>

            <UserContext.Provider value="Krishna Jangid">
                <EmailContext.Provider value="Krishna@gmail.com">
                    {/* its using old method like we use before  without hook  so this method is ugli and confusing  */}
                    <ComponentForContextPartOne />
                    {/* its with hook its more clear and understandable  */}
                    <ComponentForContextPartTwo />
                </EmailContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextHooksPartOne
