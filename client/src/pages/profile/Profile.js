import React from "react";
import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Navbar from "../navbar/Navbar";
import Posts from "../../components/posts/Posts";


const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://cfstatic.give.do/4d7787a9-81be-4b75-9ab1-c2e5019b3c4e.jpg" alt="" className="cover" />
                <img src="https://www.healthkart.com/connect/wp-content/uploads/2021/09/900x500_banner_HK-Connect_How-to-Improve-Heart-Health-_-Points-To-Keep-In-Mind.jpg" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize="small" />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon fontSize="small" />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon fontSize="small" />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon fontSize="small" />
                        </a>
                        <a href="http://facebook.com">
                            <PinterestIcon fontSize="small" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Heart plus</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>India</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>healthplus.org</span>
                            </div>
                        </div>
                        <button>FUND</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
