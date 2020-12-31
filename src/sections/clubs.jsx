import React from 'react';


export default function Clubs() {



    return (
        <div className="clubs">
            <h2 className="title">CLUBS OF THE CROWN</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <div className="clubPoster af">
                <p>AMERICAN FOOTBALL</p>
                <div className="gradient"></div>
            </div>
            <div className="clubPoster athletics">
                <p>ATHLETICS</p>
                <div className="gradient"></div>
            </div>
            <div className="clubPoster soccer">
                <p>SOCCER</p>
                <div className="gradient"></div>
            </div>
            <div className="clubPoster baseball">
                <p>BASEBALL</p>
                <div className="gradient"></div>
            </div>
        </div>
    );
}