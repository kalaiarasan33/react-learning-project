import React from 'react';
import ReactDOM from 'react-dom';


class Reactstate extends React.Component{
    constructor()
    {
        super();
        this.state={initialvalue:"welcome"}
    }

    changestate = () =>
    {
        this.setState({initialvalue:"Thanks for visit"})
    }
    render()
    {
        return <div>
        <h1>{this.state.initialvalue}</h1>
        <br/>
        <button type="button" onClick={this.changestate}>Exit</button>
        </div>
    }
}

export default Reactstate;