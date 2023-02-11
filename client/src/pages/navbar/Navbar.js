import React, { useContext } from "react";
import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>Health Plus</span>
                </Link>
                <HomeIcon />
            </div>
            <div className="right">

                <ChatBubbleIcon />

                <div className="user">
                    <img src="" alt="" />
                    <span>name</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar;