import React from 'react';
import {Toast}  from 'react-bootstrap';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


const Chatmessage= (props)=>{

    const userName= props.userName;
    const inputMessage = props.inputMessage;



   const messageList = ()=>{
            if (userName !=="" || inputMessage !==""){
              const inputMessageList = inputMessage.map((i)=>{
                return (                
                  <Toast>
                  <Toast.Header  Key={i} closeButton={false}>
                    <strong className="me-auto">{i.userName}</strong>
                  </Toast.Header>
                  <Toast.Body>{i.msg}</Toast.Body>
                </Toast> 
                )

              }
              
              )
              return(<div>
                {inputMessageList}
              </div>)

            }else {
                    return (
                      <div>
                     
                      </div>
                    );
                  
            };

          };
  
  return(
            <div>
                <PerfectScrollbar style={{height:'70vh'}}>
                {messageList()}
              </ PerfectScrollbar>
      </div>
      
    );
};

export default Chatmessage;