import React from 'react';
import ReactDOM from 'react-dom';


class Mypropsobj extends React.Component
{
    render (){
        return <h2>My React props lesson properties are  topic : [{this.props.values.topic} , {this.props.values.student}] |  default props or we can override -{this.props.concept}</h2>
    }
}


class Mynewpropsobj extends React.Component
{
   
    render (){
        var v = {topic:'react.js',student:'kalai'};
        return <div>
            <Mypropsobj values={v} concept={this.props.concept}/>
        </div>
    }
}


export default Mynewpropsobj;