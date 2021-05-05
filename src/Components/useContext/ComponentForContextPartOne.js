import React from 'react'
import { UserContext, EmailContext } from './UseContextHooksPartOne';

function ComponentForContextPartOne() {
    return (
        <div>
            {/* this pattern is looks very ugli and confusing so we will use react hook in next file  */}
            <UserContext.Consumer>
                {
                    username => {
                        return (<EmailContext.Consumer>
                            {
                                useremail => {
                                    return (
                                        <div>
                                            <p>
                                                User Name is {username}
                                            </p>
                                            <p>
                                                User Email is {useremail}
                                            </p>
                                            <p>=============================================================</p>
                                        </div>
                                    )
                                }}
                        </EmailContext.Consumer>

                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentForContextPartOne
