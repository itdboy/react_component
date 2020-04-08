import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ClassComponentExternal from './ClassComponentExternal';
import FunctionComponentExternal from './FunctionComponentExternal';
import ClassContructorComponentExternal from './ClassContructorComponentExternal';


// Function Component
// Class Component
// It’s just a function which accepts props and returns a React element. But you can also use the ES6 class syntax to write components.

// The most obvious one difference is the syntax. A function component is just a plain JavaScript function which accepts props as an argument 
// return a React Element.

// A class component require you to extend from React.Component and create a render function which return a React element

// props => คือ argument ที่จะถูกส่งค่าไปที่ component ผ่านทาง html attribute

// state => buid in 
class ClassComponentInternal extends React.Component {
  render() {
    return <h1>Class Component Internal</h1>
  }
}


function FunctionCoponentInternal() {
  return (
    <h1>Function Component Internal</h1>

  )
}

// ตัวอย่าง Props
class Props1 extends React.Component {
  constructor(props) {
    super(props);
    // เก็บค่า Props ไว้ใน constructor
  }

  render() {
    return <h1>Props1 receive props from => {this.props.props1}</h1>
  }
}

// ตัวอย่าง Props แบบหลายตัวแปร
class Props3 extends React.Component {

  constructor(props) {
    super(props);
    // เก็บค่า Props ไว้ใน constructor

  }


  render() {
    return <h1>Props3 receive props from => {this.props.props3.name1}</h1>
    // props3 อ้างอิงที่ตัวแปร name1
  }
}

class Props2 extends React.Component {

  render() {

    const const1 = "Constant Props2";

    const const3 = { name1: "Constant3.name1", name2: "Constant3.name2" }

    return (

      <div>
        <h1>Props2</h1>
        <Props1 props1="Pros2" />
        {/* ส่งแบบ direct */}
        <Props1 props1={const1} />
        {/* ส่งผ่านตัวแปร จะใช้ปีกกา */}
        <Props3 props3={const3} />
        {/* ส่งผ่านตัวแปร จะใช้ปีกกา */}
      </div>
    );
  }
}

// const myelement = <Prop brand="Props" />;

class StateSample extends React.Component {
  // ตัวอย่าง State

  constructor(props) {
    super(props);

    this.state = {
      state1: "State1",
      state2: "State2",
      state3: "State3",
      state4: "State4"
    }
  }

  changeState = () => {
    this.setState({ state1: "new state1" })
  }

  render() {
    return (
      <div>
        <h1>State Sample</h1>
        <h2>State1 = {this.state.state1}</h2>
        <h2>State2 = {this.state.state2}</h2>
        <h2>State3 = {this.state.state3}</h2>
        <h2>State4 = {this.state.state4}</h2>

        <button type="button" onClick={this.changeState}>change State</button>
      </div >
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ClassComponentInternal />
    <ClassComponentExternal />
    <ClassContructorComponentExternal />
    <FunctionCoponentInternal />
    <FunctionComponentExternal />
    <Props2 />
    <StateSample />
  </React.StrictMode >
  // myelement
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
