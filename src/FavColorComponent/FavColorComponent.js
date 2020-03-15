import React, { Component } from 'react';
import AddColorComponent from './AddColorComponent/AddColorComponent';
import DisplayColorComponent from './DisplayColorComponent/DisplayColorComponent';

class FavColorComponent extends Component {
    state = {
        name: '',
        color: '',
    }

    addColorHandler = (name, color) => {
        this.setState({
            name: {name},
            color: {color},
        })
        console.log("entered name : " + name + " entered color : " + color);
    }

    
    render() {
        
        return (
            <div>
                <AddColorComponent addColor={(name,color) => {this.addColorHandler(name,color)}} />
                <DisplayColorComponent enteredName="kumaran" color="black"/>
            </div>);
    }
}

export default FavColorComponent;