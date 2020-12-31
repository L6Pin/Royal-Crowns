import React from 'react';
import { Link } from 'react-router-dom';
import Teams from '../teamsData.json';
import Members from '../data.json';

export default function SingleClub(match) {

    let br = 0;


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
                            {console.log(match.match)}
                            <div className="posterGradient"></div>
                        </div>
                        <div className="clubInfoContainer">
                            <h3>Meet the team</h3>
                            <p>{team.meetTheTeam1}</p>
                            <img src={team.teamPicture} alt="" />
                            <p>{team.meetTheTeam2}</p>
                            <p >Latest Members</p>

                            {
                            
                                Members.map(member => {

                                    
                                    if(member.teamId === match.match.params.id){
                                        br = br + 1;
                                        if (br < 3){
                                            return(
                                                <div className="member">
                                                <div className="member__imageContainer">
                                                    <img src={member.img} alt="Member Profile Image" />
                                                </div>
                                                <div className="member__profileContainer">
                                                    <span>Name:</span>
                                                    <p>{member.name}</p>
                                            
                                                    <span>Team:</span>
                                                    <p>{member.team}</p>
                                            
                                                    <span>Age:</span>
                                                    <p>{member.age}</p>
                                                </div>
                                            </div>
                                            )
                                        }
                                    }
                                   

                            

                                })
                            }

                            <h3>Ready to join?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam magni ea veritatis, distinctio aliquid voluptatibus corporis est, impedit beatae exercitationem quos minus incidunt repellat quibusdam expedita explicabo facilis id?</p>
                        </div>

                    </div>
                )
            }

        })
    )

}

