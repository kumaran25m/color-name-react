import React, { Component } from 'react';

class DisplayColorComponent extends Component {

    render() {
    const DisplayColorStyle = {
        lineHeight: '40px',
        margin: "10px auto",
        width: "30%",
        height: "50px",
        border: "0.5px solid black",
        borderRadius: "5px",
        backgroundColor: this.props.color? this.props.color: '#000000'
    }

    return ( 
            <div style={DisplayColorStyle} >
                {this.props.enteredName}
            </div>
        );
    }
}
 
export default DisplayColorComponent;
