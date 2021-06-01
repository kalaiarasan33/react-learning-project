import React from 'react';
import user from '../images/user.png';
import { Link} from "react-router-dom";


const ContactCard =(props) =>{
    const {id,name,email} = props.contact;    
    return (
    <div className="ui items" >
    <div className="item">
      <div className="image">
        <img className="ui avatar image" src={user} alt="user"width="50" height="70"/>
      </div>
      <div className="content">
        <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
          <h3 className="header">{name}</h3>
          <div className="extra">   
            {email}       
        </div>
        </Link>
        <i className="trash alternate outline icon"
            style={{color:"red",marginTop:"20px"}}
           onClick={()=> props.deletebyid(id)} ></i>
        <Link to={{pathname:`/update/${id}`,state:{contact:props.contact}}}>
        <i className="edit icon"  style={{color:"green",marginTop:"20px"}} ></i>
        </Link>   
      </div>
  
    
    </div>
   </div>
  )
};

export default ContactCard;