import React from "react";
import PlalinList from "../../components/plalinlist/PlalinList";
import Posts from "../../components/posts/Posts";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";


const Ngo = () => {
    return (
        <div className="Ngo">
            <Navbar />
            <Profile />
            <div style={{ display: "flex", marginLeft: "30px" }}>
                <Posts />
                <div style={{ flex: 6 }}>
                    <PlalinList />
                </div>
            </div>

        </div>
    )
}

export default Ngo
