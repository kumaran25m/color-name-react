import React from 'react';

const DisplayColorComponent = (props) => {

    const DisplayColorStyle = {
        lineHeight: '40px',
        margin: "10px auto",
        width: "30%",
        height: "50px",
        border: "0.5px solid black",
        borderRadius: "5px",
        backgroundColor: "red"
    }

    return ( 
            <div style={DisplayColorStyle} >
                {props.enteredName}
            </div>
        );
}
 
export default DisplayColorComponent;