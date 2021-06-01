import React from 'react';

// Class Component

class AddContact extends React.Component {
    constructor(){
        super();
        this.state={name:"",email:""};
    }


    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory")
            return;

        }else{
            this.props.addContactHandler(this.state);
            this.setState({name:"",email:"",});
            this.props.history.push("/")
        }

    }

    render() {
        return (
            <div className="ui main" onSubmit={this.add} style={{padding: "10px"}} >
                <h2>Add Contact</h2>
                <form className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input autocomplete='off' type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>                     
                        </div>
                    <div className="field">
                        <label>Email</label>
                        <input autocomplete='off' type="text" name="email" placeholder="xyz@email.com" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>                  
                        
                    </div>  
                    <button className="ui button blue">Add</button>                  
                </form>    
            
            </div>

        )
    }
}

export default AddContact;