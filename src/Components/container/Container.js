import React from 'react';
import './Container.css';

class Container extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-5">
                        <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
                        <span className="eth fs-6 ps-2">0.041 ETH</span>
                    </div>
                    <div className="col-5">
                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
                        <span className="time ps-1">3 days left </span>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                <div className="borderE mt-3"></div>
                </div>
                <div className="img2 d-flex justify-content-start align-items-center ms-3 mb-3">
                    <img src="./img/image-avatar.png" className="portrait m-0 mt-3" alt="portrait d'un homme"/>
                    <p className="text-blue m-0 mt-3 ps-3">Creation of <span className="text-light acab">Jules Wyvern</span> </p>
                </div>
            </div>
        );
    }
}
export default Container;