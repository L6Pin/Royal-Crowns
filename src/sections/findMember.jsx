import React from 'react';
import Members from '../data.json';
import A from '../img/members/member1.jpg'

function findMembers(){
    return(
        <div className="findMembers">
            <div className="search">
                <input className="search__field" placeholder="Enter member name" type="text" name="" id="searchField"/>
            </div>
            <div className="results">
                {/* <img src={A} alt=""/> */}
                {
                    Members.map(member => (
                        <>
                            <p>{member.name}</p>
                      
                            <img src={member.img} alt={member.img}/>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default findMembers;