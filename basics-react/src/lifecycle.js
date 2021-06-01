import React from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component{
    constructor(){
        super();
        this.state={value:"welcome",name:"Kalai"}
    }
    componentWillMount(){
        alert ("Learn RactJs Lifecycle")
    }
    changevalue =()=>{
        this.setState({value:"Now Learning React lifecycle"})
    }
    render(){
        return <div>
            <h1>{this.state.value} {this.state.name}</h1>
            <br/>
            <button type="button" onClick={this.changevalue}>Change</button>    
            <button type="button" onClick={this.deletevalue}>Delete header</button>          
        </div>
    }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({value:"Thank you"})},5000)
    }
    
   componentWillUpdate()
   {
       alert("Do you want to change value")
   }

   componentDidUpdate()
   {
    
    document.getElementById("notification").innerHTML="value updated by"+this.state.name;
           
   }
   shouldComponentUpdate(){
       return true;
   }
   deletevalue = ()=>
   {
       this.setState({value:false,name:false})

   }
   componentWillUnmount()
   {
       alert("header deleted")
   }
}


export default Lifecycle;