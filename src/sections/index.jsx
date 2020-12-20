import React from 'react';
import { Link } from 'react-router-dom';
import indexBg from '../img/bg_index.png';


const index = () => {
    return (
        <div className="index">

            <img className="index__bg" src={indexBg} alt="Landing Page Background" />

            <div className="content">
                <div className="content__title">
                    <h1>ROYAL CROWNS</h1>
                    <h2>royal club of american football</h2>
                </div>
                <div className="content__buttons">
                    <Link to="/form"><p className="button button--join">JOIN THE TEAM</p></Link>
                    <Link ><p className="button button--teams">TEAM INFO</p></Link>
                </div>
            </div>

        </div>
    );
}

export default index;