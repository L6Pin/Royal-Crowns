import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Members from '../data.json';


function FindMembers() {

    const [inputField, SetInputField] = useState("");

    function updateInputFieldValue(e) {
        SetInputField(e.target.value);
    }

    return (
        <div className="findMembers">
            <div className="search">
                <input className="search__field" placeholder="Enter member name" type="text" name="" id="searchField" onChange={updateInputFieldValue} />
            </div>
            <div className="results">
                {
                    Members.map(member => {

                        if (member.name.toLowerCase().includes(inputField.toLowerCase())) {
                            return (
                                <Link to={ `/findMember/${member.id}` }>
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
                                </Link>
                            )
                        }


                    })


                }
                {
                    console.log(inputField)
                }


            </div>
        </div>
    )
}

export default FindMembers;


