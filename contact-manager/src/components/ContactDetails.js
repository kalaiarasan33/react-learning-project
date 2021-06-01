import React from 'react';
import user from '../images/user.png';
import { Link} from "react-router-dom";


const ContactDetails =(props) =>{
   const{name,email} =  props.location.state.contact;
    return (
        <div className="main">
            <div className="ui centered card" >
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <h4 className="header">{name}</h4>
                    <div className="email">
                    {email}
                    </div>
                </div>     

            </div>
            <Link to='/'  className="ui centered card">
                    <button className="ui centered blue button ">Back To ContactList</button>
                </Link>

            
        </div>


  )
};

export default ContactDetails;