import React, { useState } from 'react';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post.scss"
import { Link } from 'react-router-dom';
const Post = ({ post }) => {

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Post;