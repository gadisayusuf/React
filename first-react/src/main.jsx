import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

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




root.render(
    <h1 style={messageColor}>{message}!</h1>
);