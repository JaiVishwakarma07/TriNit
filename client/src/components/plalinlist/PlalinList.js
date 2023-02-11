import React from 'react'
import './plalinList.scss'


const PlalinList = () => {
    return (
        <div className='plalinlist'>
            <div className='container'>
                <div className="item">
                    <span>Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://static.toiimg.com/photo/95715563/95715563.jpg?v=3" alt="" />
                            <span>Jai.org</span>
                        </div>
                        <div className="buttons">
                            <button>View</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://static.toiimg.com/photo/95715563/95715563.jpg?v=3" alt="" />
                            <span>Human.org</span>
                        </div>
                        <div className="buttons">
                            <button>View</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://static.toiimg.com/photo/95715563/95715563.jpg?v=3" alt="" />
                            <span>aayush.org</span>
                        </div>
                        <div className="buttons">
                            <button>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlalinList;