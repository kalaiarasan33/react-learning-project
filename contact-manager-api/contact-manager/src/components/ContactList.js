import {React,useRef} from 'react';
import ContactCard from './ContactCard';
import { Link} from "react-router-dom";

const ContactList =(props) =>{
    const inputE1 = useRef("");
    const deleteHandler = props.getbyid
    const getSearchTerm = ()=>{
        props.searchKeywords(inputE1.current.value)
    };

    const renderList = props.contacts.map((contact) =>{
        return <ContactCard  contact={contact} deletebyid={deleteHandler} key={contact.id}></ContactCard>
            
    });
    
    return (
        <div className="main" style={{padding: "10px"}}>

            <h2>
                Contact List

                <Link to="/add">
                        <button className="ui blue button right floated">Add Contact</button>
                </Link>
            </h2>
  
            <div className="ui search">
            <div className="ui icon input">
                <input ref={inputE1} className="prompt" type="text" placeholder="Search Contact..." value={props.term} onChange={getSearchTerm}/>
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
            </div>
            <div className="ui celled list">{renderList.length > 0 ? renderList :"No Contacts Available"}</div>
            
        </div>

    )
}

export default ContactList;