import React from 'react';
import ReactDOM from 'react-dom';


class Myprops extends React.Component
{
    render (){
        return <h2>My React props lesson properties are  topic : {this.props.topic}</h2>
    }
}

class Mynewprops extends React.Component
{
   
    render (){
        var v = "passing  props from another component";
        return <div>
            <Myprops topic={v}/>
        </div>
    }
}

export default Mynewprops;