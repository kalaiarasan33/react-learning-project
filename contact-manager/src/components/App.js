import React,{useState,useEffect} from 'react';
import './App.css';
import { uuid } from "uuidv4";
import Header from './Header'
import ContactList from './ContactList'
import AddContact from './AddContact'
import ContactDetails from './ContactDetails'
import UpdateContact from './UpdateContact'
import {  BrowserRouter as Router,  Switch, Route} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY ="contacts"
  
  const [contacts,setContacts]=useState([])

  const addContactHandler= (contact)=>{
    setContacts([...contacts,{id:uuid(),...contact}]);
  }
  const updateContactHandler= (contact)=>{  
    var i = 0;
     for (i = 0; i < contacts.length; i++) {
        if(contacts[i]["id"] === contact.id){
          contacts[i]["name"] = contact.name;
          contacts[i]["email"] = contact.email;
        }
      }
    setContacts(contacts);

  }

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;

    })
    setContacts(newContactList)

  }
  useEffect(()=>{
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContact) {
      setContacts(retriveContact)
    }
    
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div >      
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" render={(props)=> (<ContactList {...props} contacts={contacts} getbyid={removeContactHandler}/>)}/>
        <Route path="/add" render={(props)=> (<AddContact {...props} addContactHandler={addContactHandler}/>)}/>
        <Route path="/contact/:id" component={ContactDetails}/>
        <Route path="/update/:id" render={(props)=>(<UpdateContact {...props} updateContactHandler={updateContactHandler}/>)}/>
      </Switch> 
     
      </Router>
    </div>
  );
}

export default App;
