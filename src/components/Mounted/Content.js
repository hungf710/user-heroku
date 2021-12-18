import React, {useState, useEffect} from 'react'

export default function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [])


    return (
        <div>
            <br/>
            {/*<input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />*/}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {/*<h1> Hí Anh Em</h1>*/}
        </div>
    )
}
