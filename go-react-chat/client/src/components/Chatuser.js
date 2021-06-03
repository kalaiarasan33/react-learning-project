import React,{useState} from 'react'; 
import {Button,Modal} from 'react-bootstrap';

function Chatuser(props) {
    const [userName,setUserName] = useState("");
   
    const handleShow = ()=>{
        props.handleShow();
    }
    const handleClose = ()=>{
        props.handleClose();
     }
    const handlejoinClose = ()=>{
        props.setUserName(userName);
        setUserName("")
        props.handleClose();       
      
    }
    
    const isShowInput = () =>{
        if (props.userName !==""){
            return (
                <div>

                </div>
            )
        }else {
            return (
                <div>
                  <Modal.Dialog>
                  <Button variant="dark" onClick={handleShow}>
                            Launch ChatRoom
                   </Button> 
                  </Modal.Dialog>
 
                <Modal show={props.show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                  <Modal.Title>Fun with Friends!!!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="ui fluid action input">                    
                            <input type="text" placeholder="Enter Your Name..." value={userName} onChange={(e)=>{ setUserName(e.target.value)}}/>
                    </div>
                  </Modal.Body>
        
                   <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="outline-dark" onClick={handlejoinClose}>
                      Join User
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>

            )
        }

    }



    return (
        <div>
            {isShowInput()}
        </div>

    );
  }
  

  export default Chatuser;