import React, { Component } from 'react';
import AddColorComponent from './AddColorComponent/AddColorComponent';
import DisplayColorComponent from './DisplayColorComponent/DisplayColorComponent';

class FavColorComponent extends Component {
    state = {
        displayArray: [],
        name: '',
        color: ''
    }

    addColorHandler = (colorState) => {
        this.setState({
            name: colorState.name,
            color: colorState.color,
        }, () => {
            const displayComp = (
                <DisplayColorComponent key={this.state.displayArray.length} enteredName={this.state.name} color={this.state.color}/>
            );
            const displayArrayObj = [...this.state.displayArray];
            displayArrayObj.push(displayComp);
            this.setState({
                displayArray: [...displayArrayObj]
            });
            
        })
        
    }

    
    render() {
        
        return (
            <div>
                <AddColorComponent addColor={this.addColorHandler} />
                {
                    this.state.displayArray.map((disp) => {
                        return disp;
                    })
                }
            </div>);
    }
}

export default FavColorComponent;
