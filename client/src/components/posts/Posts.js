import React from 'react';
import Post from '../post/Post';
import "./posts.scss"
const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic:
                "https://cfstatic.give.do/4d7787a9-81be-4b75-9ab1-c2e5019b3c4e.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg",
        },
        {
            id: 2,
            name: "John Doe",
            userId: 2,
            profilePic:
                "https://cfstatic.give.do/4d7787a9-81be-4b75-9ab1-c2e5019b3c4e.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg",
        },
        {
            id: 3,
            name: "John Doe",
            userId: 1,
            profilePic:
                "https://cfstatic.give.do/4d7787a9-81be-4b75-9ab1-c2e5019b3c4e.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg",
        },
        {
            id: 4,
            name: "John Doe",
            userId: 2,
            profilePic:
                "https://cfstatic.give.do/4d7787a9-81be-4b75-9ab1-c2e5019b3c4e.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg",
        },
        {
            id: 5,
            name: "John Doe",
            userId: 1,
            profilePic:
                "https://cfstatic.give.do/4d7787a9-81be-4b75-9ab1-c2e5019b3c4e.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg",
        },
        {
            id: 6,
            name: "John Doe",
            userId: 2,
            profilePic:
                "https://cfstatic.give.do/4d7787a9-81be-4b75-9ab1-c2e5019b3c4e.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg",
        },
    ];
    return (
        <div className='posts'>
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts;