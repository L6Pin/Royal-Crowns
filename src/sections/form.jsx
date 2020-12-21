import React from 'react';
import logo from '../img/logo.png';

const form = () => {
    return (
        <div className="form">
           
           <div className="form__container">
               
                <img src={logo} alt="" className="form__logo"/>
                <h2 className="form__title">ROYAL CROWNS</h2>
                <p className="form__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>

                <span className="form__fieldTitle">Name</span>
                <input type="text" className="form__field" name="" id=""/>

                <span className="form__fieldTitle">Surname</span>
                <input type="text" className="form__field" name="" id=""/>

                <span className="form__fieldTitle">Phone Number</span>
                <input type="text" className="form__field" name="" id=""/>

                <span className="form__fieldTitle">Team</span>
                <input type="text" className="form__field" name="" id=""/>

                <p className="form__submit">SUBMIT</p>
                

           </div>

        </div>
    );
}

export default form;