import {React} from 'react';
import ContactCard from './ContactCard';
import { Link} from "react-router-dom";

const ContactList =(props) =>{
    const deleteHandler = props.getbyid
    const renderList = props.contacts.map((contact) =>{
        return <ContactCard  contact={contact} deletebyid={deleteHandler} key={contact.id}></ContactCard>
            
    });
    return (
        <div className="main" >

            <h2>
                Contact List

                <Link to="/add">
                        <button className="ui blue button right floated">Add Contact</button>
                </Link>
            </h2>
  

            <div className="ui celled list">{renderList}</div>
            
        </div>

    )
}

export default ContactList;