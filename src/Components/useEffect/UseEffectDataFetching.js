import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectDataFetching() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log("api called")
            setPost(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div align="center"><br /><br />
            <ul>
                {posts.map(singlepost => (<li key={singlepost.id}>
                    {singlepost.title}
                </li>))}
            </ul>
        </div>
    )
}

export default UseEffectDataFetching;
