import { Button } from '@mui/material';
import React, { useContext } from 'react';
import "./ngolist.scss"

const Ngolist = () => {
    //temp img: "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2022/07/disha-patani-bikini-hot-1659075024.jpg",
    const Ngolist = [
        {
            id: 1,
            name: "PaathShala",
            img: "https://www.dailypioneer.com/uploads/2017/story/images/big/191286_1.jpg",
        },
        {
            id: 2,
            name: "PaathShala",
            img: "https://www.dailypioneer.com/uploads/2017/story/images/big/191286_1.jpg",
        },
        {
            id: 3,
            name: "PaathShala",
            img: "https://www.dailypioneer.com/uploads/2017/story/images/big/191286_1.jpg",
        },
        {
            id: 4,
            name: "PaathShala",
            img: "https://www.dailypioneer.com/uploads/2017/story/images/big/191286_1.jpg",
        },
    ];
    return (
        <div className='ngolist'>
            {Ngolist.map(story => (
                <Button>
                    <div className="story" key={story.id}>
                        <img src={story.img} alt="" />
                        <span>{story.name}</span>
                    </div>
                </Button>
            ))}
        </div>
    )
}

export default Ngolist;