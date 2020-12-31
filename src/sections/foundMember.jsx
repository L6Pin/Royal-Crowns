import React from 'react';
import Members from '../data.json';
import team from '../img/team.png';
import city from '../img/city.png';
import age from '../img/age.png';
import game from '../img/game.png';

export default function FoundMember(match) {



    return (
        <div className="FoundMember">

            {
                Members.map(member => {

                    if (member.id === match.match.params.id) {
                        return (
                            <>
                                <div className="mainMemberInfo">
                                    <div className="frame">
                                        <img src={member.img} alt="" />
                                    </div>
                                    <div className="nameANDig">
                                        <p>{member.name}</p>
                                        <p>{member.ig}</p>
                                    </div>
                                </div>

                                <div className="sideMemberInfo">
                                    <div className="row">
                                        <div className="rowSection">
                                            <img src={team} alt="" />
                                            {member.team}
                                        </div>
                                        <div className="rowSection">
                                            <img src={age} alt="" />
                                            {member.age}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="rowSection">
                                            <img src={city} alt="" />
                                            {member.city}
                                        </div>
                                        <div className="rowSection">
                                            <img src={game} alt=""/>
                                            {member.game}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                })
            }
        </div>


    );
}

