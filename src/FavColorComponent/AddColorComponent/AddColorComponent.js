import React, { Component } from 'react';
class AddColorComponent extends Component {
    state = {
        name : '',
        color : ''
    }

    onAddHandler = () => {
        console.log("Add handler called")
        this.props.addColor(this.state.name, this.state.color);
    }

    colorInputHandler = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    nameInputHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return ( 
            <div>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={this.colorInputHandler} value={this.state.color}/>
                </div>
                <div>
                    <label>Name: </label>
                    <input type="text" onChange={this.nameInputHandler} value={this.state.name}/>
                </div>
                <button name="AddColor" onClick={this.onAddHandler}> Add </button>
            </div> 
        );
    }
}
 
export default AddColorComponent;