import React from "react";
import Ngolist from "../../components/Ngolist/Ngolist";
import Posts from "../../components/posts/Posts";
import Navbar from "../navbar/Navbar"

const Phalin = () => {
    return (
        <div className="phalin">
            <Navbar />
            <Ngolist />
            <div style={{ display: "flex", marginLeft: "30px" }}>
                <Posts />
                <div style={{ flex: 6 }}>

                </div>
            </div>
        </div>
    )
}

export default Phalin