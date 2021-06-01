import React,{useState,useEffect} from 'react';
import './App.css';
import { uuid } from "uuidv4";
import Header from './Header'
import ContactList from './ContactList'
import AddContact from './AddContact'
import ContactDetails from './ContactDetails'
import UpdateContact from './UpdateContact'
import {  BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import api from "../service/contact-api"

function App() {
  const LOCAL_STORAGE_KEY ="contacts"
  
  const [contacts,setContacts]=useState([]);
  const [searchTerm,setSearchTerm]= useState("");
  const [searchResults,setSearchResults]= useState([]);

  const retriveContact = async()=>{
    const response = await api.get('/contacts');
    return response.data;
  }

  const addContactHandler= async (contact)=>{
    const request = {id:uuid(),...contact}
    const response = await api.post('/contacts',request)
    setContacts([...contacts,response.data]);
  }

  const updateContactHandler= async (contact)=>{  

    await api.put(`/contacts/${contact.id}`,contact)
    var i = 0;
     for (i = 0; i < contacts.length; i++) {
        if(contacts[i]["id"] === contact.id){
          contacts[i]["name"] = contact.name;
          contacts[i]["email"] = contact.email;
        }
      }
    setContacts([...contacts]);

  }

 const  searchHandler = (searchTerm) =>{
   setSearchTerm(searchTerm);
   if(searchTerm !==""){
     const newContactList = contacts.filter((contact) =>{
       return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
     })
     setSearchResults(newContactList)
   }else{
    setSearchResults(contacts)
   }
  };

  const removeContactHandler = async (id)=>{
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;

    })
    setContacts(newContactList)

  }
  useEffect(()=>{
    // const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const getallContact = async()=>{
      const  allcontacts = await retriveContact();
      if (allcontacts) {
        setContacts(allcontacts);
      };
    }
    getallContact();
    
  },[])

  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
 
  },[contacts]);

  return (
    <div >      
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" render={(props)=> (<ContactList {...props} contacts={ searchTerm.length < 1 ? contacts: searchResults} getbyid={removeContactHandler} term={searchTerm} searchKeywords={searchHandler}/>)}/>
        <Route path="/add" render={(props)=> (<AddContact {...props} addContactHandler={addContactHandler}/>)}/>
        <Route path="/contact/:id" component={ContactDetails}/>
        <Route path="/update/:id" render={(props)=>(<UpdateContact {...props} updateContactHandler={updateContactHandler}/>)}/>
      </Switch> 
     
      </Router>
    </div>
  );
}

export default App;
