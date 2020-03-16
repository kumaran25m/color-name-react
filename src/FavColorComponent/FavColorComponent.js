import React, { Component } from 'react';
import AddColorComponent from './AddColorComponent/AddColorComponent';
import DisplayColorComponent from './DisplayColorComponent/DisplayColorComponent';

class FavColorComponent extends Component {
    state = {
        name: '',
        color: '',
    }

    addColorHandler = (colorState) => {
        this.setState(colorState);
        console.log("entered name : " + this.state.name + " entered color : " + this.state.color);
    }

    
    render() {
        
        return (
            <div>
                <AddColorComponent addColor={(name,color) => {this.addColorHandler(name,color)}} />
                <DisplayColorComponent key="hello" enteredName={this.state.name} color={this.state.color}/>
            </div>);
    }
}

export default FavColorComponent;
