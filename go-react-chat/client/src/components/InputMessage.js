import React,{useState,useEffect} from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {Button} from 'react-bootstrap';
import ws from '../api/socket';

const InputMessage = (props)=>{
  const [msg,setMsg]=useState("");
  const inputMessage = props.inputMessage;
  const userName = props.userName;

  useEffect(()=>{
    ws.onmessage = function (msges) {
      const data = JSON.parse(msges.data);      
      props.setInputMessage([...inputMessage,{...data}])       
    }
  })

  const sendMsg = ()=>{    
    if (msg !==""){
      const data={
        userName,
        msg
      }
      ws.send(JSON.stringify(data));
      //props.setInputMessage([...inputMessage,msg])
      setMsg("")
    }

  }
  

  return(

    <div className="ui fluid  action input">
      <input type="text" placeholder="Type Your Message..." value={msg} onChange={(e)=>setMsg(e.target.value)} onKeyDown={(e)=>{if(e.keyCode === 13) sendMsg()}}/>
      <Button variant="dark" onClick={sendMsg} >Send Message</Button>                  
    </div>        
    );
};

export default InputMessage;