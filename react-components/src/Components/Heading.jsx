import React from 'react';
import './styles.css';


function Heading(){
    const date = new Date();
    const hours = date.getHours();

    const messageColor = {
        color: '',
    };

    let message ;
    if (hours < 12) {
        message = 'Good morning';
        messageColor.color = 'red';
    } else if (hours < 18) {
        message = 'Good Afternoon';
        messageColor.color = 'green';
    } else {
        message = 'Good evening';
        messageColor.color = 'blue';
    }
    return (<h1 style={messageColor}>{message} React!</h1>);
}

export default Heading;