import React from 'react';
import { Link } from 'react-router-dom';
import Teams from '../teamsData.json';


export default function SingleClub(match) {



    return (
        Teams.map(team => {

            if (match.match.params.id === team.id) {
                return (
                    <div className="sClub">
                        <div className="posterContainer">
                            <img src={team.teamCover} alt="" className="poster" />
                            <div className="posterInfoContainer">
                                <h2>{team.team}</h2>
                                <p>{team.teamSubtitle}</p>
                            </div>
                            <div className="posterGradient"></div>
                        </div>
                        <div className="clubInfoContainer">
                            <h3>Meet the team</h3>
                            <p>{team.meetTheTeam1}</p>
                            <img src={team.teamPicture} alt="" />
                            <p>{team.meetTheTeam2}</p>

                            {/* Latest members */}
                            {console.log(match.match.params.id)}

                            <h3>Ready to join?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam magni ea veritatis, distinctio aliquid voluptatibus corporis est, impedit beatae exercitationem quos minus incidunt repellat quibusdam expedita explicabo facilis id?</p>
                        </div>

                    </div>
                )
            }

        })
    )

}

