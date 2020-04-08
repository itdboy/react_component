import React from 'react';

class ClassContructorComponentExternal extends React.Component {

    constructor() {
        super();

        this.state = { stateProperty: "State Contructor Value" };
        // ใน react ค่า property จะถูกเก็บไว้ใน Stage
    }

    render() {
        return <h1>Contructor Component - {this.state.stateProperty} </h1>
    }

}

class ComponentInComponent extends React.Component {
    //การอ้าง Component in component 
    render() {
        return (
            <div>
                <h1>Component in Component</h1>
                <ClassContructorComponentExternal />
                {/* อ้างอิง class component จาก ClassContructorComponentExternal อีกที */}
            </div>
        )
    }
}


export default ComponentInComponent;
//   อ้างอิง ComponentInComponent แล้วอ้างอ้ง ClassContructorComponentExternal อีกรอบ