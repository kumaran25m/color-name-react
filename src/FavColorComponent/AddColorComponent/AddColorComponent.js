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
        const addColorStyle = {
            margin: 'auto',
            height: '30px',
            padding: '10px'
        }

        const buttonStyle = {
            backgroundColor: "#008CBA",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "12px",
            borderRadius: "5px",
            cursor: "pointer"
        }

        return ( 
            <div>
                <div style={addColorStyle}>
                    <label>Color: </label>
                    <input type="text" onChange={this.colorInputHandler} value={this.state.color}/>
                </div>
                <div style={addColorStyle}>
                    <label>Name: </label>
                    <input type="text" onChange={this.nameInputHandler} value={this.state.name}/>
                </div>
                <button name="AddColor" style={buttonStyle} onClick={this.onAddHandler}> Add </button>
            </div> 
        );
    }
}
 
export default AddColorComponent;