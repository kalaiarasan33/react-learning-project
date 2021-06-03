import React,{useState} from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Chatmessage from './Chatmessage';
import {Container}  from 'react-bootstrap';
import InputMessage from './InputMessage';
import Chatuser from './Chatuser';


const Chatbox = ()=>{
 
  const [show, setShow] = useState(false);
  const [userInput,setUserInput] = useState(false);
  const [userName,setUserName] = useState("")
  const [inputMessage,setInputMessage] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return(
      <div>
          <div>    
            <Container>
                <Chatuser userInput={userInput} userName={userName} setUserName={setUserName} show={show} handleClose={handleClose} handleShow={handleShow} />    
                <Chatmessage userName={userName} inputMessage={inputMessage} />
                <InputMessage userName={userName} inputMessage={inputMessage} setInputMessage={setInputMessage}/>
              </Container> 
            </div>
      </div>
      
    );
};

export default Chatbox;