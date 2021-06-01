import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mywebadd from './App.js';
//import MyProps from './properties.js'

import Mynewprops from './properties.js'
import Mynewpropsobj from './propertiesobj.js'

import Reactstate from './reactst.js'

import Lifecycle from './lifecycle.js'

import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Class and methods
class demo
{
  calc()
  {
    var a = 10;
    var b = 20;
    var c = a + b;
    document.getElementById('root').innerHTML = c;
  }
}

// var mydemo = new demo();
// mydemo.calc()


var calc = function(){
  var a = 10;
  var b = 20;
  var c = a + b;
  document.getElementById('root').innerHTML = c;
}

//calc()

// Creating DOM element in without using jsx //

const elementByReact = React.createElement('h1',{},"hello world - without using jsx");
//ReactDOM.render(elementByReact,document.getElementById('root'));

var elementCss ={
  color:'blue',
  textAlgin:'center'
}

// Creating DOM element in with using jsx , add expression {5 + 5} //
const element = <div style={elementCss}> 
 <h1 className="header">with using jsx </h1>
 <h3>"hello world" </h3>
 <h3>{5+5} </h3>

</div>
//ReactDOM.render(element,document.getElementById('root'))


// Functional components //

function Header(){
  return <h1> Hello Functional Component</h1>
}

function Siderbar(){
  return <h3> Sidebar</h3>

}

function Navbar(){
  return <h3>navBar</h3>

}

function Footer(){
  return <h1> fun !!! @copyrights</h1>
}

function Mywebsite(){
  return <div>
    <Header />
    <Siderbar />
    <Navbar />
    <Footer />
  </div>
}

//ReactDOM.render(<Mywebsite/>, document.getElementById('root'));

// Class components //


class Myweb extends React.Component{

  render(){
    return <h1>Class component Myweb</h1>
  }
}

// Mywebadd exported from another file //
class Mynewweb extends React.Component{

  render(){
    return <div>
      <Myweb />
      <Mywebadd />
      <h1>Class component Mynewweb</h1>
      
    </div>
  }
}

//ReactDOM.render(<Mynewweb />,document.getElementById('root'))



// Props lesson //

//exporting MyProps  component from another file properties.js //


//ReactDOM.render(<MyProps topic="Reactjs props" />,document.getElementById('root'))

// passing Propeties from another component //

//ReactDOM.render(<Mynewprops />,document.getElementById('root'))


// passing object Propeties from another component //

//ReactDOM.render(<Mynewpropsobj />,document.getElementById('root'))


// create default properities //

//Mynewpropsobj.defaultProps={concept:"defaultprops"}
//ReactDOM.render(<Mynewpropsobj />,document.getElementById('root'))

// create default properities and overide//

//ReactDOM.render(<Mynewpropsobj concept="defaultprops-override" />,document.getElementById('root'))


// React State Lesson

//ReactDOM.render(<Reactstate/>,document.getElementById('root'))

// Life cycle Lesson


ReactDOM.render(<Lifecycle/>,document.getElementById('root'))
