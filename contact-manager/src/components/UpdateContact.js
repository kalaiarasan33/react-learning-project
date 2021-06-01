import React from 'react';

// Class Component

class UpdateContact extends React.Component {
    constructor(props) {
        super(props);
        const {id,name,email} = this.props.location.state.contact;
        this.state={id,name,email};
    }


    update = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory")
            return;

        }else{
            this.props.updateContactHandler(this.state);
            this.setState({id:"",name:"",email:"",});
            this.props.history.push("/")
        }

    }

    render() {
        return (
            <div className="ui main" onSubmit={this.update} >
                <h2>Add Contact</h2>
                <form className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>                     
                        </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="xyz@email.com" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>                  
                        
                    </div>  
                    <button className="ui button blue">Update</button>                  
                </form>    
            
            </div>

        )
    }
}

export default UpdateContact;