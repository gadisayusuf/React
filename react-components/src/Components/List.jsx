import React from 'react';
import './styles.css';


function List(){
    const date = new Date();
    const hours = date.getHours();

    let textColor = {
        color: '',
    }
    if (hours < 12) {
        textColor.color = 'black';
    } else if (hours < 18){
        textColor.color = 'golden';
    }
    else {
        textColor.color = 'purple';
    }
    return <ul style={textColor}>
        <li>Easy Coding</li>
        <li>Modular Handling</li>
        <li>Seamless Navigation</li>
    </ul>
}

export default List;